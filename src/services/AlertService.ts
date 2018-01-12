import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class AlertService {

	constructor(
		private alertCtrl: AlertController,
		private toastCtrl: ToastController
	) { }

	showErrorBox(message: any) { // deprecate
		console.log('showError');
		console.error(message);

		var show = ( (message.error) ? message.error : (message) ? message : ('Unknown error') );

		return this.alertCtrl.create({
			title: ('Error'),
			subTitle: show,
			buttons: ['OK']
		}).present();
	}

	showToast(message: any) {
		console.log('showToast',message);

		return this.toastCtrl.create({
			message: message,
			position: 'middle',
			showCloseButton: true,
			duration: 5000
		}).present();
	}

	showError(message: any, extra?: any) {
		console.log('showError():');
		console.error(message);

		var show = 'Error: '+( (message.error) ? message.error : (message) ? message : ('Unknown') ) + (extra ? ' - '+extra : '');

		return this.showToast(show);
	}
}
