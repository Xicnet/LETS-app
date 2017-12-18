import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {

	constructor(
		private alertCtrl: AlertController
	) { }

	showError(message: any) {
		console.log('showError');
		console.error(message);

		var show = ( (message.error) ? message.error : (message) ? message : _('Unknown error') );

		return this.alertCtrl.create({
			title: _('Error'),
			subTitle: show,
			buttons: ['OK']
		}).present();
	}
}
