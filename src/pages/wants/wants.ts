import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, Loading, Popover, PopoverController } from 'ionic-angular';
import { WantService } from '../../services/WantService';
import { AlertService } from '../../services/AlertService';
import { Want } from '../../domain/Want';
import { WantDetailPage } from '../wantDetail/wantDetail';
import { AddWantPage } from '../addWant/addWant';
import { CategoriesFilterPage } from '../categories/categories';
// import { KeywordsFilterPage } from '../keywords/keywords';
// import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';
import { FiltersBuilderComponent } from '../../components/filtersBuilder/filtersBuilder';
import { Member } from '../../domain/Member';
import * as $ from 'jquery';
import { map } from 'lodash';
import { MemberDetailPage } from '../../pages/memberDetail/memberDetail';
import { MembersPage } from '../../pages/members/members';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'page-wants',
	templateUrl: 'wants.html'
})
export class WantsPage implements OnInit {
	private canPost = false;
	private definitionWant: any;
	private wants: Array<Want>;
	private loader: Loading;
	private popover: Popover;
	private page: number;
	private isLoading: boolean;
	private hasNoMoreData: boolean;
	private filter: any;
	private filterName: string;
	private myActions: boolean;
	private deleteWantConfirmDialog: boolean;
	private currentUser: Member;
	private keywords: string;
	private filters_action: any;
	private is_filtered: boolean;
	private categories: any;
	private category: any;
	private member: any;
	private noResults: boolean;


	constructor(public viewCtrl: ViewController,
		private navCtrl: NavController,
		private navParams: NavParams,
		public loadingCtrl: LoadingController,
		private popoverCtrl: PopoverController,
		private wantService: WantService,
    private translate: TranslateService,
		private alertService: AlertService) { }

	ngOnInit(): void {
		this.setPagination();
		if (this.navParams.data) {
			this.filter = this.navParams.data.filter;
			this.filterName = this.navParams.data.filterName;
			this.myActions = this.navParams.data.myActions;
			this.currentUser = this.navParams.data.currentUser;
			this.is_filtered = this.navParams.data.is_filtered;
		}
		this.viewCtrl.didEnter.subscribe(
			response => {
				if (this.deleteWantConfirmDialog) {
					return;
				}
				this.initPage();
			});
	}

	initPage() {
		this.page = 1;
		this.hasNoMoreData = false;
		this.isLoading = false;
		this.wants = [];
		this.wantService.describe().subscribe(
			response => {
				this.definitionWant = response;
				this.canPost = !!this.definitionWant.POST;
				// if (this.canPost) {
				// 	$('page-wants ion-content.content').children().css('margin-bottom', '45px');
				// }

				this.categories = map(this.definitionWant.POST.category.options, (category, key) => {
					return { id: key, title: category };
				});

			},
			error => this.alertService.showError(error));

		this.loadWants(true);
	}

	setPagination() {
		$('page-wants .scroll-content').on('scroll', (ev) => {
			if (this.hasNoMoreData || this.isLoading) {
				return;
			}
			if ((ev.target.scrollHeight - ev.target.scrollTop) < 800) {
				this.loadWants();
			}
		});
	}

	loadWants(from_scratch?: boolean) {
		if (this.hasNoMoreData || this.isLoading) {
			return;
		}
		this.isLoading = true;
		this.loader = this.loadingCtrl.create({
			content: ('Please wait')+'...'
		});
		this.loader.present();
		this.wantService.list(this.page, this.filter).subscribe(
			response => {
				if(from_scratch) this.wants = [];
          if(!this.filterName) {
            this.translate.get('Recent Needs', {}).subscribe((res: string) => {
            this.filterName = res;
          });
        }
				if (!response.length) {
					this.hasNoMoreData = true;
				}
				this.wants = this.wants.concat(response);
				this.page++;
				this.loader.dismiss();
				this.isLoading = false;
			},
			error => {
				this.alertService.showError(error);
				this.loader.dismiss();
				this.isLoading = false;
			});
	}

	setFilterPage(ev) {
		this.keywords = ev.target.value;
		if(this.keywords){
			this.navCtrl.push(WantsPage, {
				filter: `&fragment=${this.keywords}`,
				filterName: `'${this.keywords}'`
			});
		}
	}

	showDetails(id) {
		this.navCtrl.push(WantDetailPage, {
			id: id
		});
	}

	addWant() {
		this.navCtrl.push(AddWantPage);
	}

	showMember(userId) {
		this.navCtrl.push(MemberDetailPage, {
			id: userId
		});
	}

	goToPage(menuEntry) {
		let page = menuEntry.page;
		if (page) {
			this.navCtrl.push(page, menuEntry.params);
		}
	}

	goToFilters() {
		this.goToPage(this.filters_action)
	}

	showCategories(myEvent) {
		this.popover = this.popoverCtrl.create(FiltersBuilderComponent, {
			options: this.categories
			// [ {
			// 	title: ('Clear Filters'),
			// }]
		}, {
				cssClass: 'confirm-popover',
				enableBackdropDismiss: true
			});

		this.popover.present({
			ev: myEvent
		});

		this.popover.onDidDismiss(data => {
		 console.log(data);
		 if(data!=null && data.id!=null){
			 this.category = data;
			 this.activateFilter();
		 }
	 })
	}

	searchUsers(myEvent) {
		this.popover = this.popoverCtrl.create(MembersPage, {
			isPopover: true,
			operation: ('Filter by')
		}, {
				cssClass: 'confirm-popover',
				showBackdrop: true,
				enableBackdropDismiss: true
			});

		this.popover.present({
			ev: myEvent
		});

		this.popover.onDidDismiss(data => {
		 // console.log(data);
		 if(data!=null && data!=null){
			 this.member = data;
			 this.activateFilter();
		 }
	 })
	}

	setFilter(ev) {
		this.keywords = ev.target.value;
		this.activateFilter();
	}


	activateFilter() {
		this.filter = '';
		let filterName = ('Needs');
		this.is_filtered = false;
		if(this.keywords){
			this.is_filtered = true;
			filterName = filterName+' '+('of')+' '+`"${this.keywords}"`;
			this.filter = `&fragment=${this.keywords}`;
		}
		if(this.member){
			this.is_filtered = true;
			filterName = filterName+' '+('by')+' '+`${this.member.name}`;
			this.filter = this.filter+`&user_id=${this.member.id}`;
		}
		if(this.category){
			this.is_filtered = true;
			filterName = filterName+' '+('in')+' '+`${this.category.title}`;
			this.filter = this.filter+`&category=${this.category.id}`;
		}
		this.page = 1; // reset
		this.hasNoMoreData = false;
		this.filterName = filterName;
		this.loadWants(true);
	}


	clearFilters(myEvent){
		this.is_filtered = false;
		this.keywords = this.filter = this.filterName = '';
		this.category = this.member = null;
		this.page = 1; // reset
		this.hasNoMoreData = false;
		this.loadWants(true);
	}



}
