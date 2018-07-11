import { Component, OnInit, ElementRef } from '@angular/core';
import { NavParams, NavController, ViewController, LoadingController, Loading, PopoverController, Popover } from 'ionic-angular';
import { MemberService } from '../../services/MemberService';
import { AlertService } from '../../services/AlertService';
import { Member } from '../../domain/Member';
import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';
import { ContactMemberPage } from '../memberContact/memberContact';
import { OffersPage } from '../../pages/offers/offers';
import { WantsPage } from '../../pages/wants/wants';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { AppSettings } from '../../app/app.settings';

@Component({
	selector: 'page-memberDetail',
	templateUrl: 'memberDetail.html'
})
export class MemberDetailPage implements OnInit {
	private member: Member;
	private loader: Loading;
	private popover: Popover;
	private deleteOfferConfirmDialog: boolean;
	QRData = null;
  QRCode = null;
	QRImg = null;

	constructor(private params: NavParams,
		private viewCtrl: ViewController,
		private navCtrl: NavController,
		public loadingCtrl: LoadingController,
		private memberService: MemberService,
		private popoverCtrl: PopoverController,
		private alertService: AlertService,
		private settings: AppSettings,
		public element: ElementRef,
		private base64ToGallery: Base64ToGallery
	) { }

	ngOnInit(): void {
		this.viewCtrl.didEnter.subscribe(
			response => {
				this.loader = this.loadingCtrl.create({
					content: ('Please wait')+'...'
				});
				this.loader.present();
				this.memberService.get(this.params.get('id')).subscribe(
					response => {
						this.member = response;
						this.loader.dismiss();
						this.QRData = this.settings.WEB_SITE_URL+'/user/'+this.member.id+'?qr_action=member&qr_id='+this.member.id;
					},
					error => {
						this.alertService.showError(error);
						this.loader.dismiss();
					});
			});
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
				this.memberService.custom(href).subscribe(
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

	contactMember() {
		this.navCtrl.push(ContactMemberPage, {
			to_id: this.params.get('id')
		});
	}

	memberOffers() {
		this.navCtrl.push(OffersPage, {
			filter: '&user_id='+this.params.get('id'),
			filterName: 'Offers by '+this.member.name,
			is_filtered: true
		});
	}

	memberWants() {
		this.navCtrl.push(WantsPage, {
			filter: '&user_id='+this.params.get('id'),
			filterName: 'Needs by '+this.member.name,
			is_filtered: true
		});
	}

	createCode() {
    this.QRCode = this.QRData;
  }

	saveQR() {

		if(this.QRCode){

			let nodes = this.element.nativeElement.querySelectorAll('.qrcode img');
			nodes.forEach(node => {
				if(node.src) this.QRImg = node.src;

				if(this.QRImg) this.base64ToGallery.base64ToGallery(this.QRImg, { prefix: 'QRcode', mediaScanner:true }).then(
				res => this.alertService.showToast('Saved QR code to your photo gallery'),
				err => this.alertService.showError('Error saving QR to your photo gallery ', err)
				);
			});

		}
  }

}
