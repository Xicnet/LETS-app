import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController, NavController, LoadingController, Loading, PopoverController, Popover } from 'ionic-angular';
import { WantService } from '../../services/WantService';
import { AlertService } from '../../services/AlertService';
import { MemberDetailPage } from '../memberDetail/memberDetail';
import { Want } from '../../domain/Want';
import { map } from 'lodash';
import { AuthService } from '../../services/AuthService';
import { Member } from '../../domain/Member';
import { AddWantPage } from '../addWant/addWant';
import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';

@Component({
	selector: 'page-want-detail',
	templateUrl: 'wantDetail.html'
})
export class WantDetailPage implements OnInit {
	private definitionWant: any;
	private want: Want;
	private loader: Loading
	private imageExpanded: boolean;
	private currentMember: Member;
	private currentUser: any;
	private popover: Popover;
	private deleteWantConfirmDialog: boolean;

	constructor(private params: NavParams,
		private viewCtrl: ViewController,
		private navCtrl: NavController,
		public loadingCtrl: LoadingController,
		private wantService: WantService,
		private authService: AuthService,
		private popoverCtrl: PopoverController,
		private alertService: AlertService) { }

	ngOnInit(): void {
		this.viewCtrl.didEnter.subscribe(
			response => {
				this.imageExpanded = false;
				this.loader = this.loadingCtrl.create({
					content: _('Please wait')+'...'
				});
				this.loader.present();

				this.authService.userInfo.subscribe(
					userInfo => {
						this.currentUser = userInfo.id;
						this.currentMember = userInfo;
						console.log(this.currentMember)
					});

				this.wantService.describe().subscribe(
					response => {
						this.definitionWant = response;
						this.wantService.get(this.params.get('id')).subscribe(
							response => {
								for (let i in this.definitionWant.POST) {
									let field = this.definitionWant.POST[i];
									if (field.type === 'select') {
										if (field.multiple) {
											response[`$${i}`] = map(response[i], (option: any) => field.options[option]).join(', ');
										} else {
											response[`$${i}`] = field.options[response[i]];
										}
									}
								}
								this.want = response;
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


	editWant(want: Want) {
		this.navCtrl.push(AddWantPage, {
			want: want
		});
	}

	deleteWant(id) {
		this.popover = this.popoverCtrl.create(ConfirmationBuilderComponent, {
			fields: this.definitionWant.POST,
			operation: _('Delete Want')
		}, {
				cssClass: 'confirm-popover',
				enableBackdropDismiss: false
			});
		this.deleteWantConfirmDialog = true;
		this.popover.onDidDismiss((data) => {
			this.deleteWantConfirmDialog = false;
			if (data && data.hasConfirmed) {
				this.loader = this.loadingCtrl.create({
					content: _('Please wait')+'...'
				});
				this.loader.present();
				this.wantService.delete(id).subscribe(
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
		this.deleteWantConfirmDialog = true;
		this.popover.onDidDismiss((data) => {
			this.deleteWantConfirmDialog = false;
			if (data && data.hasConfirmed) {
				this.loader = this.loadingCtrl.create({
					content: _('Please wait')+'...'
				});
				this.loader.present();
				this.wantService.custom(href).subscribe(
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
