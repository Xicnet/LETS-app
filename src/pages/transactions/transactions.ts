import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController, NavParams, LoadingController, Loading, PopoverController, Popover } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { TransactionService } from '../../services/TransactionService';
import { AlertService } from '../../services/AlertService';
import { Transaction } from '../../domain/Transaction';
import { AddTransactionPage } from '../addTransaction/addTransaction';
import { TransactionDetailPage } from '../transactionDetail/transactionDetail';
import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';

@Component({
	selector: 'page-transactions',
	templateUrl: 'transactions.html'
})
export class TransactionsPage implements OnInit {
	private username: string;
	private canPost = false;
	private success = false;
	private definitionTransaction: any;
	private transactions: Array<Transaction>;
	private filter: any;
	private loader: Loading;
	private popover: Popover;
	private deleteOfferConfirmDialog: boolean;

	constructor(private menuCtrl: MenuController,
		private navCtrl: NavController,
		private modalCtrl: ModalController,
		private authService: AuthService,
		private transactionService: TransactionService,
		private navParams: NavParams,
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
		if (this.navParams.data) {
			this.filter = this.navParams.data.filter;
		}
		this.transactionService.describe()
			.subscribe(
			response => {
				this.definitionTransaction = response;
				this.canPost = !!this.definitionTransaction.POST;
			},
			error => this.alertService.showError('Connection problem!')
			);
		this.loadTransactions();
	}

	loadTransactions() {
		this.transactionService.list(this.filter)
			.subscribe(
			response => this.transactions = response,
			error => this.alertService.showError('Connection problem!')
			);
	}

	addTransaction() {
		let modal = this.modalCtrl.create(AddTransactionPage);
		modal.onDidDismiss((data: any = {}) => {
			this.success = data.success;
			this.loadTransactions();
		});
		modal.present();
	}


	showDetails(id) {
		this.navCtrl.push(TransactionDetailPage, {
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
