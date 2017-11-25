import { Component, OnInit } from '@angular/core';
import { App, ViewController, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { LoginPage } from '../../pages/login/login';
// import { HomePage } from '../../pages/home/home';

@Component({
	selector: 'more-actions-builder-component',
	templateUrl: 'moreActionsBuilder.html'
})
export class MoreActionsBuilderComponent implements OnInit {
	private options: Array<{ title: string, page?: any, icon: string }>;
	private operation: string;
	private status: string;

	constructor(public viewCtrl: ViewController,
		// private navCtrl: NavController,
		private navParams: NavParams,
		private authService: AuthService,
		public appCtrl: App
	 ) { }

	ngOnInit(): void {
		if (this.navParams.data) {
			this.options = this.navParams.data.options;
			this.operation = this.navParams.data.operation;
			this.status = this.navParams.data.status || 'was saved';
		}
	}

	goToPage(option) {
		let page = option.page;
		if (page) {
			this.viewCtrl.dismiss();
			this.appCtrl.getRootNav().push(page, option.params);
			// this.navCtrl.popToRoot();
			// this.navCtrl.push(page, option.params);
		}
	}

	goBack() {
		this.viewCtrl.dismiss();
		// this.navCtrl.pop();
		// this.navCtrl.remove(2,1);
		this.appCtrl.getRootNav().pop();
	}

	goToHome() { // TODO - does not work well
		this.viewCtrl.dismiss();
		// this.navCtrl.setRoot(HomePage);
		// this.navCtrl.push(HomePage);
		this.appCtrl.getRootNav().popToRoot();
	}

	doLogout() {
		this.authService.doLogout().subscribe(
			response => {
				this.viewCtrl.dismiss();
				this.appCtrl.getRootNav().setRoot(LoginPage);
			});
	}
}
