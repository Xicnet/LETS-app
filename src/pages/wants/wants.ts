import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { WantService } from '../../services/WantService';
import { AlertService } from '../../services/AlertService';
import { Want } from '../../domain/Want';
import { WantDetailPage } from '../wantDetail/wantDetail';
import { AddWantPage } from '../addWant/addWant';
import { CategoriesFilterPage } from '../categories/categories';
// import { KeywordsFilterPage } from '../keywords/keywords';
// import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';
// import { FiltersBuilderComponent } from '../../components/filtersBuilder/filtersBuilder';
import { Member } from '../../domain/Member';
import * as $ from 'jquery';
import { map } from 'lodash';
import { MemberDetailPage } from '../../pages/memberDetail/memberDetail';

@Component({
	selector: 'page-wants',
	templateUrl: 'wants.html'
})
export class WantsPage implements OnInit {
	private canPost = false;
	private definitionWant: any;
	private wants: Array<Want>;
	private loader: Loading;
	// private popover: Popover;
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

	constructor(public viewCtrl: ViewController,
		private navCtrl: NavController,
		private navParams: NavParams,
		public loadingCtrl: LoadingController,
		// private popoverCtrl: PopoverController,
		private wantService: WantService,
		private alertService: AlertService) { }

	ngOnInit(): void {
		this.setPagination();
		if (this.navParams.data) {
			this.filter = this.navParams.data.filter;
			this.filterName = this.navParams.data.filterName;
			this.myActions = this.navParams.data.myActions;
			this.currentUser = this.navParams.data.currentUser;
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

				this.filters_action = {
					title: 'Show By Categories',
					page: CategoriesFilterPage,
					params: {
						categories: map(this.definitionWant.POST.category.options, (category, key) => {
							return { id: key, name: category };
						}),
						title: 'Needs',
						page: WantsPage
					}
				}

			},
			error => this.alertService.showError(error));
		this.loadWants();
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

	loadWants() {
		if (this.hasNoMoreData || this.isLoading) {
			return;
		}
		this.isLoading = true;
		this.loader = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.loader.present();
		this.wantService.list(this.page, this.filter).subscribe(
			response => {
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

	setFilter(ev) {
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


}
