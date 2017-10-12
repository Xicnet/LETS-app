import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, Loading, PopoverController, Popover } from 'ionic-angular';
import { OfferService } from '../../services/OfferService';
import { AlertService } from '../../services/AlertService';
import { Offer } from '../../domain/Offer';
import { OfferDetailPage } from '../offerDetail/offerDetail';
import { AddOfferPage } from '../addOffer/addOffer';
import { CategoriesFilterPage } from '../categories/categories';
import { KeywordsFilterPage } from '../keywords/keywords';
import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';
import { FiltersBuilderComponent } from '../../components/filtersBuilder/filtersBuilder';
import { Member } from '../../domain/Member';
import * as $ from 'jquery';
import { map } from 'lodash';

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

	constructor(public viewCtrl: ViewController,
		private navCtrl: NavController,
		private navParams: NavParams,
		public loadingCtrl: LoadingController,
		private popoverCtrl: PopoverController,
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
				if (this.canPost) {
					$('page-offers ion-content.content').children().css('margin-bottom', '90px');
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
			if ((ev.target.scrollHeight - ev.target.scrollTop) < 600) {
				this.loadOffers();
			}
		});
	}

	loadOffers() {
		if (this.hasNoMoreData || this.isLoading) {
			return;
		}
		this.isLoading = true;
		this.loader = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.loader.present();
		this.offerService.list(this.page, this.filter).subscribe(
			response => {
				if (!response.length) {
					this.hasNoMoreData = true;
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

	setFilter(ev) {
		this.keywords = ev.target.value;
		if(this.keywords){
			this.navCtrl.push(OffersPage, {
				filter: `&fragment=${this.keywords}`,
				filterName: `'${this.keywords}'`
			});
		}
	}

	showDetails(id) {
		this.navCtrl.push(OfferDetailPage, {
			id: id
		});
	}

	addOffer() {
		this.navCtrl.push(AddOfferPage);
	}

	
	showFilters() {
		this.popover = this.popoverCtrl.create(FiltersBuilderComponent, {
			options: [{
				// 	title: 'Show Latest',
				// 	page: OffersPage
				// }, {
				title: 'Show By Categories',
				page: CategoriesFilterPage,
				params: {
					categories: map(this.definitionOffer.POST.category.options, (category, key) => {
						return { id: key, name: category };
					}),
					title: 'Offerings',
					page: OffersPage
				}
			}, {
				title: 'Show By Keyword',
				page: KeywordsFilterPage,
				params: {
					title: 'Offerings',
					page: OffersPage
				}
			}, {
				title: 'Clear Filters',
				page: OffersPage
			}]
		}, {
				cssClass: 'confirm-popover',
				enableBackdropDismiss: true
			});
		this.popover.present();
	}
}
