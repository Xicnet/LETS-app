import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, PopoverController, Popover, Platform } from 'ionic-angular';
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
import { OfferDetailPage } from '../offerDetail/offerDetail';

import { MenuOptionPopover } from './menu-option';
import { AppSettings } from '../../app/app.settings';
import { ConfigService } from '../../services/ConfigService';
import { AppVersion } from '@ionic-native/app-version';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

// import { _ } from '@biesbjerg/ngx-translate-extract';

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
	// private menu: Array<MenuEntry>;
	private menus: any;
	private popover: Popover;
	public version: any;
	public QR_visible: boolean;
	public reset_back_button_action: any;

	constructor(public viewCtrl: ViewController,
		private navCtrl: NavController,
		private popoverCtrl: PopoverController,
		private authService: AuthService,
		private settings: AppSettings,
		private configService: ConfigService,
		public platform: Platform,
		public appVersion: AppVersion,
		private qrScanner: QRScanner
) { }

	ngOnInit(): void {



		this.platform.ready().then( ()=> {

			if (this.platform.is('cordova')) {
					this.appVersion.getVersionNumber().then((version)=>{
	          // this.version = version;
						this.settings.APP_VERSION = version;
	        }
	      )
			}

    });​

		this.configService.initAppConfig();

		this.authService.userInfo.subscribe(
			userInfo => {
				this.member = userInfo;
				this.menus = [
			{
				header: ('I need something'),
				menu_items: [
					{
						title: ('Browse offers'),
						icon: 'images',
						page: OffersPage,
						params: {
							currentUser: this.member.id
						}
					},
					{
						title: ('Post my need'),
						icon: 'megaphone',
						page: AddWantPage,
					}
				 ]
			},
			{
				header: ('I have something to offer'),
				menu_items: [
					{
						title: ('Browse needs'),
						icon: 'paper',
						page: WantsPage,
						params: {
							currentUser: this.member.id
						}
					},
					{
						title: ('Post my offer'),
						icon: 'clipboard',
						page: AddOfferPage
					}
				]
			 },
			{
				header: ("I made a trade"),
				menu_items: [
				{
					title: ('I received something'),
					icon: 'basket',
					page: AddTransactionPage,
					params: {
						title: ('As Buyer'),
						fields: {
							payer: {
								default: this.member.name,
								disabled: true
							}
						},
					}
				},
				{
					title: ('I provided something'),
					icon: 'filing',
					page: AddTransactionPage,
					params: {
						title: ('As Seller'),
						fields: {
							payee: {
								default: this.member.name,
								disabled: true
							}
						}
					}
				},
				{
					title: ('Scan a QR code'),
					icon: 'barcode',
					action: 'scanQR',
				},
			]
		},
		{
	 	header: ('Community'),
	 	menu_items: [
	 		{
	 			title: ('Find a member'),
	 			icon: 'people',
	 			page: MembersPage,
				params: {
					operaton: 'Find a'
				},
	 		},
			{
				title: ('View transactions'),
				icon: 'stats',
				page: TransactionsPage
			},
	 		]
	 	},
		{
			header: ('My account'),
			menu_items: [
				{
					title: ('View my profile'),
					icon: 'person',
					page: MemberDetailPage,
					params: {
						id: this.member.id
					},
				},
				{
					title: ('Edit my details'),
					icon: 'contact',
					page: ProfilePage
				},
				{
					title: ('View my transactions'),
					icon: 'stats',
					page: TransactionsPage,
					params: {
						filter: `&involving=${this.member.id}`
					},
				},
				{
					title: ('View my offers'),
					icon: 'briefcase',
					page: OffersPage,
					params: {
						filter: `&user_id=${this.member.id}`,
						filterName: 'Offers by '+this.member.name,
						myActions: true,
						is_filtered: true
					},
				},
				{
					title: ('View my needs'),
					icon: 'list',
					page: WantsPage,
					params: {
						filter: `&user_id=${this.member.id}`,
						filterName: 'Needs by '+this.member.name,
						myActions: true,
						is_filtered: true
					}
				},
				]
			}
		];
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
		} else if(menuEntry.action && menuEntry.action=='scanQR'){
			this.scanQR();
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

	goToURL(URL) {
		window.open(URL, '_system', 'location=yes');
	}

	goToFullSite() {
		this.goToURL(this.settings.WEB_SITE_URL);
	}

	scanQR(){
		this.qrScanner.prepare()
		  .then((status: QRScannerStatus) => {

		     if (status.authorized) {
					 console.log("camera permission was granted");


		       // start scanning
		       let scanSub = this.qrScanner.scan().subscribe((text: string) => {

						 console.log('Scanned something', text);

						 scanSub.unsubscribe(); // stop scanning
		         this.qrScanner.hide(); // hide camera preview
						 this.hideQR();

						 if(text){
							 let action = this.getURLParameterByName(text, "qr_action");
							 let id = this.getURLParameterByName(text, "qr_id");
							 console.log('QR result',action,id)

							 if(action=='offer'){
								 this.navCtrl.push(OfferDetailPage, {
									 id: id
								 });
							 }
							 else if(action=='member'){
								 this.navCtrl.push(MemberDetailPage, {
									 id: id
								 });
							 }
							 // this.goToURL(text); // TEMP
						 }


		       });

					 // TODO: Make the webview transparent so the video preview is visible behind it. Be sure to make any opaque HTML elements transparent here to avoid covering the video.

		       // show camera preview
		       // this.qrScanner.show();
					 this.qrScanner.show().then(data => {
						  console.log('success showing camera');

							this.QR_visible = true;
							(window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');

							let TIME_IN_MS = 10000;
							let hideFooterTimeout = setTimeout( () => { // hide scanner if open too long
							    // this.qrScanner.hide(); // hide camera preview
									this.hideQR();
							}, TIME_IN_MS);

							this.reset_back_button_action = this.platform.registerBackButtonAction( ()=> {
								if(this.QR_visible) this.hideQR();
								// else if(this.navCtrl.canGoBack()) this.viewCtrl.dismiss();
								else this.platform.exitApp();
							})

						}, err => {
						  console.log('Error showing camera');

							this.hideQR();

						});

		       // wait for user to scan something, then the observable callback will be called

		     } else if (status.denied) {
					 console.log("camera permission was permanently denied. you must use QRScanner.openSettings() method to guide the user to the settings page. then they can grant the permission from there");

		     } else {
					 console.log("permission was denied, but not permanently. You can ask for permission again at a later time");
		     }
		  })
		.catch((e: any) => console.log('QR Error:', e));
	}

	hideQR(){ // hide QR camera preview
		this.qrScanner.hide();
		this.QR_visible = false;
		this.reset_back_button_action();
		(window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
	}

	getURLParameterByName(url, name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(url);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

}
