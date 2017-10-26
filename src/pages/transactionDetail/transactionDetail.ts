import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, MenuController, ModalController, LoadingController, Loading, PopoverController, Popover } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { TransactionService } from '../../services/TransactionService';
import { AlertService } from '../../services/AlertService';
import { Transaction } from '../../domain/Transaction';
import { MemberDetailPage } from '../memberDetail/memberDetail';
import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';

@Component({
	selector: 'page-transaction-detail',
	templateUrl: 'transactionDetail.html'
})
export class TransactionDetailPage implements OnInit {
	private username: string;
	private canPost = false;
	private success = false;
	private definitionTransaction: any;
	private transaction: Transaction;
	private loader: Loading;
	private popover: Popover;
	private deleteOfferConfirmDialog: boolean;

	constructor(private params: NavParams,
		private navCtrl: NavController,
		private menuCtrl: MenuController,
		private modalCtrl: ModalController,
		private authService: AuthService,
		private transactionService: TransactionService,
		public loadingCtrl: LoadingController,
		private popoverCtrl: PopoverController,
		private alertService: AlertService) {
		this.menuCtrl.enable(true, 'app-menu');
		this.authService.userInfo.subscribe(
			userInfo => {
				this.username = userInfo.name;
			});
	}

	ngOnInit(): void {
		this.transactionService.describe()
			.subscribe(
			response => {
				this.definitionTransaction = response;
				this.canPost = !!this.definitionTransaction.POST;
			},
			error => this.alertService.showError('Connection problem!')
			);
		this.loadTransaction(this.params.get('id'));
	}

	loadTransaction(id) {
		this.transactionService.get(id)
			.subscribe(
			response => this.transaction = response,
			error => this.alertService.showError('Connection problem!')
			);
	}

	showMember(id) {
		this.navCtrl.push(MemberDetailPage, {
			id: id
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
				this.transactionService.custom(href).subscribe(
					response => {
						this.ngOnInit();
						this.loader.dismiss();
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
