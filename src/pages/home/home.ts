import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, PopoverController, Popover } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { Member } from '../../domain/Member';
import { LoginPage } from '../../pages/login/login';
import { OffersPage } from '../../pages/offers/offers';
import { AddOfferPage } from '../../pages/addOffer/addOffer';
import { WantsPage } from '../../pages/wants/wants';
import { AddWantPage } from '../../pages/addWant/addWant';
import { AddTransactionPage } from '../../pages/addTransaction/addTransaction';
import { TransactionsPage } from '../../pages/transactions/transactions';
import { MembersPage } from '../../pages/members/members';
import { ProfilePage } from '../../pages/userProfile/userProfile';
import { MenuOptionPopover } from './menu-option';


interface MenuEntry {
	title: string;
	icon: string;
	options?: Array<{ title: string, page?: any, params?: any }>;
	page?: any;
	params?: any;
}

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage implements OnInit {
	private member: Member;
	private menu: Array<MenuEntry>;
	private menus: any;
	private popover: Popover;

	constructor(public viewCtrl: ViewController,
		private navCtrl: NavController,
		private popoverCtrl: PopoverController,
		private authService: AuthService) { }

	ngOnInit(): void {
		this.authService.userInfo.subscribe(
			userInfo => {
				this.member = userInfo;
				this.menus = [
			{
				header: 'I need something',
				menu_items: [
					{
						title: 'Browse offers',
						icon: 'ion-pricetag',
						page: OffersPage,
					},
					{
						title: 'Post my need',
						icon: 'ion-edit',
						page: AddWantPage,
					}
				 ]
			},
			{
				header: 'I have something to offer',
				menu_items: [
					{
						title: 'Browse needs',
						page: WantsPage
					},
					{
						title: 'Post my offer',
						page: AddOfferPage
					}
				]
			 },
			{
				header: 'Transactions',
				menu_items: [
				{
					title: 'I bought something',
					icon: 'cart',
					page: AddTransactionPage,
					params: {
						title: 'As Buyer',
						fields: {
							payer: {
								default: this.member.name,
								disabled: true
							}
						},
					}
				},
				{
					title: 'I sold something',
					icon: 'ion-briefcase',
					page: AddTransactionPage,
					params: {
						title: 'As Seller',
						fields: {
							payee: {
								default: this.member.name,
								disabled: true
							}
						}
					}
				},
				{
					title: 'Trading History',
					icon: 'ion-stats-bars',
					page: TransactionsPage
				},
			]
		 },
		{
			header: 'Other',
			menu_items: [
				{
					title: 'Browse members',
					icon: 'ion-person',
					page: MembersPage
				}, {
					title: 'My Account',
					icon: 'ion-home',
					page: ProfilePage
				}]
			}];
		});
	}

	goToPage(menuEntry) {
		let page = menuEntry.page;
		if (page) {
			this.navCtrl.push(page, menuEntry.params);
			// if (this.popover) {
			// 	this.popover.dismiss();
			// }
			// this.viewCtrl.dismiss();
		}
	}

	showOptions(menuEntry, $event) {
		if (menuEntry.options && menuEntry.options.length) {
			this.popover = this.popoverCtrl.create(MenuOptionPopover, {
				options: menuEntry.options
			});
			this.popover.present({
				ev: $event
			});
		}
	}

	doLogout() {
		this.authService.doLogout().subscribe(
			response => this.navCtrl.setRoot(LoginPage));
	}
}
