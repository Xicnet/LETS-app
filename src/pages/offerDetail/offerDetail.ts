import { Component, OnInit, ElementRef } from '@angular/core';
import { NavParams, ViewController, NavController, LoadingController, Loading, PopoverController, Popover } from 'ionic-angular';
import { OfferService } from '../../services/OfferService';
import { AlertService } from '../../services/AlertService';
import { MemberDetailPage } from '../memberDetail/memberDetail';
import { Offer } from '../../domain/Offer';
import { map } from 'lodash';
import { MoreActionsBuilderComponent } from '../../components/moreActionsBuilder/moreActionsBuilder';
import { AuthService } from '../../services/AuthService';
import { Member } from '../../domain/Member';
import { AddOfferPage } from '../addOffer/addOffer';
import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';
import { AppSettings } from '../../app/app.settings';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
	selector: 'page-offer-detail',
	templateUrl: 'offerDetail.html'
})
export class OfferDetailPage implements OnInit {
	private definitionOffer: any;
	private offer: Offer;
	private loader: Loading
	private imageExpanded: boolean;
	private popover: Popover;
	private currentMember: Member;
	private currentUser: any;
	private deleteOfferConfirmDialog: boolean;
	QRData = null;
  QRCode = null;
	QRImg = null;

	constructor(private params: NavParams,
		private viewCtrl: ViewController,
		private navCtrl: NavController,
		public loadingCtrl: LoadingController,
		private popoverCtrl: PopoverController,
		private offerService: OfferService,
		private authService: AuthService,
		private alertService: AlertService,
		private settings: AppSettings,
		public element: ElementRef,
		private base64ToGallery: Base64ToGallery
) { }

	ngOnInit(): void {
		this.viewCtrl.didEnter.subscribe(
			response => {
				this.imageExpanded = false;
				this.loader = this.loadingCtrl.create({
					content: ('Please wait')+'...'
				});
				this.loader.present();

				this.authService.userInfo.subscribe(
					userInfo => {
						this.currentUser = userInfo.id;
						this.currentMember = userInfo;
						console.log(this.currentMember)
					});

				this.offerService.describe().subscribe(
					response => {
						this.definitionOffer = response;
						this.offerService.get(this.params.get('id')).subscribe(
							response => {
								for (let i in this.definitionOffer.POST) {
									let field = this.definitionOffer.POST[i];
									if (field.type === 'select') {
										if (field.multiple) {
											response[`$${i}`] = map(response[i], (option: any) => field.options[option]).join(', ');
										} else {
											response[`$${i}`] = field.options[response[i]];
										}
									}
								}
								this.offer = response;
								this.QRData = this.settings.WEB_SITE_URL+'/node/'+this.offer.id+'?qr_action=offer&qr_id='+this.offer.id;
								this.loader.dismiss();
							},
							error => {
								this.alertService.showError(error);
								this.loader.dismiss();
							});
					},
					error => {
						this.alertService.showError(error);
						this.loader.dismiss();
					});
			});
	}

	showMember(userId) {
		this.navCtrl.push(MemberDetailPage, {
			id: userId
		});
	}

	expandImage() {
		this.imageExpanded = !this.imageExpanded;
	}

	showActions() {
		this.popover = this.popoverCtrl.create(MoreActionsBuilderComponent, {
			operation: ('Offer'),
			status: 'Menu',
			options: []
		}, {
				cssClass: 'confirm-popover',
				enableBackdropDismiss: true
			});
		this.popover.present();
	}

	editOffer(offer: Offer) {
		this.navCtrl.push(AddOfferPage, {
			offer: offer
		});
	}


	deleteOffer(id) {
		this.popover = this.popoverCtrl.create(ConfirmationBuilderComponent, {
			fields: this.definitionOffer.POST,
			operation: ('Delete Offer')
		}, {
				cssClass: 'confirm-popover',
				enableBackdropDismiss: false
			});
		this.deleteOfferConfirmDialog = true;
		this.popover.onDidDismiss((data) => {
			this.deleteOfferConfirmDialog = false;
			if (data && data.hasConfirmed) {
				this.loader = this.loadingCtrl.create({
					content: ('Please wait')+'...'
				});
				this.loader.present();
				this.offerService.delete(id).subscribe(
					response => {
						this.loader.dismiss();
						// this.initPage();
					},
					error => {
						this.alertService.showError(error);
						this.loader.dismiss();
					});
			}
		});
		this.popover.present();
	}

	customAction(label: String, href: String, confirm: String) {
		console.log(label, href, confirm);
		this.popover = this.popoverCtrl.create(ConfirmationBuilderComponent, {
			operation: label
		}, {
				cssClass: 'confirm-popover',
				enableBackdropDismiss: false
			});
		this.deleteOfferConfirmDialog = true;
		this.popover.onDidDismiss((data) => {
			this.deleteOfferConfirmDialog = false;
			if (data && data.hasConfirmed) {
				this.loader = this.loadingCtrl.create({
					content: ('Please wait')+'...'
				});
				this.loader.present();
				this.offerService.custom(href).subscribe(
					response => {
						this.loader.dismiss();
						// this.initPage();
					},
					error => {
						this.alertService.showError(error);
						this.loader.dismiss();
					});
			}
		});
		this.popover.present();
	}

	createCode() {
    this.QRCode = this.QRData;
  }

	saveQR() {

		if(this.QRCode){

			let nodes = this.element.nativeElement.querySelectorAll('.qrcode img');
			nodes.forEach(node => {
				if(node.src) this.QRImg = node.src;

				if(this.QRImg) this.base64ToGallery.base64ToGallery(this.QRImg, { prefix: 'QRcode' }).then(
				res => this.alertService.showToast('Saved QR code to your photo gallery'),
				err => this.alertService.showError('Error saving QR to your photo gallery ', err)
				);
			});

		}
  }
}
