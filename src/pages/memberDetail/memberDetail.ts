import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController, LoadingController, Loading, PopoverController, Popover } from 'ionic-angular';
import { MemberService } from '../../services/MemberService';
import { AlertService } from '../../services/AlertService';
import { Member } from '../../domain/Member';
import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';

@Component({
	selector: 'page-memberDetail',
	templateUrl: 'memberDetail.html'
})
export class MemberDetailPage implements OnInit {
	private member: Member;
	private loader: Loading;
	private popover: Popover;
	private deleteOfferConfirmDialog: boolean;

	constructor(private params: NavParams,
		private viewCtrl: ViewController,
		public loadingCtrl: LoadingController,
		private memberService: MemberService,
		private popoverCtrl: PopoverController,
		private alertService: AlertService) { }

	ngOnInit(): void {
		this.viewCtrl.didEnter.subscribe(
			response => {
				this.loader = this.loadingCtrl.create({
					content: 'Please wait...'
				});
				this.loader.present();
				this.memberService.get(this.params.get('id')).subscribe(
					response => {
						this.member = response;
						this.loader.dismiss();
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
					content: 'Please wait...'
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

}
