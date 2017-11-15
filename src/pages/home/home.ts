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
import { MemberDetailPage } from '../../pages/memberDetail/memberDetail';
import { ProfilePage } from '../../pages/userProfile/userProfile';
import { MenuOptionPopover } from './menu-option';
import { AppSettings } from '../../app/app.settings';
import { ConfigService } from '../../services/ConfigService';


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
		private authService: AuthService,
		private settings: AppSettings,
		private configService: ConfigService,
) { }

	ngOnInit(): void {

		this.configService.initAppConfig();

	// this.authService.requestUserInfo.subscribe(
	// response => {
		this.authService.userInfo.subscribe(
			userInfo => {
				this.member = userInfo;
				this.menus = [
			{
				header: 'I need something',
				menu_items: [
					{
						title: 'Browse offers',
						icon: 'images',
						page: OffersPage,
						params: {
							currentUser: this.member.id
						}
					},
					{
						title: 'Post my need',
						icon: 'megaphone',
						page: AddWantPage,
					}
				 ]
			},
			{
				header: 'I have something to offer',
				menu_items: [
					{
						title: 'Browse needs',
						icon: 'paper',
						page: WantsPage,
						params: {
							currentUser: this.member.id
						}
					},
					{
						title: 'Post my offer',
						icon: 'clipboard',
						page: AddOfferPage
					}
				]
			 },
			{
				header: "I made a trade",
				menu_items: [
				{
					title: 'I received something',
					icon: 'basket',
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
					title: 'I provided something',
					icon: 'filing',
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

			]
		},
		{
	 	header: 'Community',
	 	menu_items: [
	 		{
	 			title: 'View members',
	 			icon: 'people',
	 			page: MembersPage
	 		},
			{
				title: 'View transactions',
				icon: 'stats',
				page: TransactionsPage
			},
	 		]
	 	},
		{
			header: 'My account',
			menu_items: [
				{
					title: 'View my profile',
					icon: 'person',
					page: MemberDetailPage,
					params: {
						id: this.member.id
					},
				},
				{
					title: 'Edit my details',
					icon: 'contact',
					page: ProfilePage
				},
				{
					title: 'View my transactions',
					icon: 'stats',
					page: TransactionsPage,
					params: {
						filter: `&involving=${this.member.id}`
					},
				},
				{
					title: 'View my offers',
					icon: 'briefcase',
					page: OffersPage,
					params: {
						filter: `&user_id=${this.member.id}`,
						filterName: `user: ${this.member.name}`,
						myActions: true
					},
				},
				{
					title: 'View my needs',
					icon: 'list',
					page: WantsPage,
					params: {
						filter: `&user_id=${this.member.id}`,
						filterName: `user: ${this.member.name}`,
						myActions: true
					}
				},
				]
			}
		];
		});
	// });
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
