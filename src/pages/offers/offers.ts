import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, Loading, Popover, PopoverController } from 'ionic-angular';
import { OfferService } from '../../services/OfferService';
import { AlertService } from '../../services/AlertService';
import { Offer } from '../../domain/Offer';
import { OfferDetailPage } from '../offerDetail/offerDetail';
import { AddOfferPage } from '../addOffer/addOffer';
import { CategoriesFilterPage } from '../categories/categories';
// import { KeywordsFilterPage } from '../keywords/keywords';
// import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';
import { FiltersBuilderComponent } from '../../components/filtersBuilder/filtersBuilder';
import { Member } from '../../domain/Member';
import * as $ from 'jquery';
import { map } from 'lodash';
import { MemberDetailPage } from '../memberDetail/memberDetail';
import { MembersPage } from '../../pages/members/members';

@Component({
	selector: 'page-offers',
	templateUrl: 'offers.html'
})
export class OffersPage implements OnInit {
	private canPost = false;
	private definitionOffer: any;
	private offers: Array<Offer>;
	private loader: Loading;
	private popover: Popover;
	private page: number;
	private isLoading: boolean;
	private hasNoMoreData: boolean;
	private filter: any;
	private filterName: string;
	private myActions: boolean;
	private deleteOfferConfirmDialog: boolean;
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
		public popoverCtrl: PopoverController,
		private offerService: OfferService,
		private alertService: AlertService,
) { }

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
				if (this.deleteOfferConfirmDialog) {
					return;
				}
				this.initPage();
			});
	}

	initPage() {
		this.page = 1;
		this.hasNoMoreData = false;
		this.isLoading = false;
		this.offers = [];

		this.offerService.describe().subscribe(
			response => {
				this.definitionOffer = response;
				this.canPost = !!this.definitionOffer.POST;
				// if (this.canPost) {
				// 	$('page-offers ion-content.content').children().css('margin-bottom', '45px');
				// }

				this.categories = map(this.definitionOffer.POST.category.options, (category, key) => {
					return { id: key, title: category };
				});

				this.filters_action = { // deprecate
					title: ('Show By Categories'),
					page: CategoriesFilterPage,
					params: {
						categories: this.categories, // uses name rather than title
						title: ('Offers'),
						page: OffersPage
					}
				}

			},
			error => this.alertService.showError(error));
		this.loadOffers();
	}

	setPagination() {
		$('page-offers .scroll-content').on('scroll', (ev) => {
			if (this.hasNoMoreData || this.isLoading) {
				return;
			}
			if ((ev.target.scrollHeight - ev.target.scrollTop) < 800) {
				this.loadOffers();
			}
		});
	}

	loadOffers(from_scratch?: boolean, filterName?: string) {
		if (this.hasNoMoreData || this.isLoading) {
			return;
		}
		this.isLoading = true;
		this.loader = this.loadingCtrl.create({
			content: ('Please wait')+'...'
		});
		this.loader.present();
		this.offerService.list(this.page, this.filter).subscribe(
			response => {
				if(from_scratch) this.offers = [];
				if(filterName) this.filterName = filterName;
				if (!response.length) {
					this.hasNoMoreData = true;
					this.noResults = true;
				} else {
					this.noResults = false;
				}
				this.offers = this.offers.concat(response);
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

	showDetails(id) {
		this.navCtrl.push(OfferDetailPage, {
			id: id
		});
	}

	addOffer() {
		this.navCtrl.push(AddOfferPage);
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

	goToFiltersPage() {
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
			operation: 'Filter by'
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


	setFilterPage(ev) { // deprecate
		this.keywords = ev.target.value;
		if(this.keywords){
			this.navCtrl.push(OffersPage, {
				filter: `&fragment=${this.keywords}`,
				filterName: `'${this.keywords}'`
			});
		}
	}

	setFilter(ev) {
		this.keywords = ev.target.value;
		this.activateFilter();
	}


	activateFilter() {
		let filterName = this.filter = '';
		this.is_filtered = false;
		if(this.keywords){
			this.is_filtered = true;
			filterName = ` matching "${this.keywords}"`;
			this.filter = `&fragment=${this.keywords}`;
		}
		if(this.member){
			this.is_filtered = true;
			filterName = filterName+` by ${this.member.name}`;
			this.filter = this.filter+`&user_id=${this.member.id}`;
		}
		if(this.category){
			this.is_filtered = true;
			filterName = filterName+` in ${this.category.title}`;
			this.filter = this.filter+`&category=${this.category.id}`;
		}
		this.page = 1; // reset
		this.hasNoMoreData = false;
		this.loadOffers(true, filterName);
	}


	clearFilters(myEvent){
		// this.is_filtered = false;
		this.keywords = '';
		this.category = null;
		this.member = null;
		this.activateFilter();
	}

}
