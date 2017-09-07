import { Component, OnInit } from '@angular/core';
import { NavParams, MenuController, ModalController } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { TransactionService } from '../../services/TransactionService';
import { AlertService } from '../../services/AlertService';
import { Transaction } from '../../domain/Transaction';

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

	constructor(private params: NavParams,
		private menuCtrl: MenuController,
		private modalCtrl: ModalController,
		private authService: AuthService,
		private transactionService: TransactionService,
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


}
