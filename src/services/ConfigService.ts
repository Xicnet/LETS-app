import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AppSettings } from '../app/app.settings';
import { HttpBasicAuth } from './HttpBasicAuth';
import { AlertService } from './AlertService';
import { Config } from '../domain/Config';

@Injectable()
export class ConfigService {
	appConfig = new ReplaySubject<Config>(1);

	constructor(private settings: AppSettings,
		private httpBasicAuth: HttpBasicAuth,
		private alertService: AlertService) {
		// this.requestAppConfig().subscribe(
		// 	response => this.appConfig.next(response),
		// 	error => this.alertService.showError(error));
	}

	requestAppConfig(): Observable<Config> {
		return this.httpBasicAuth.get(this.settings.URL.config);
	}

	initAppConfig(): void {
		if(!this.settings.SERVER_URL) this.alertService.showError('The app does not know your community URL. Please configure it.\n');
		else this.requestAppConfig().subscribe(
			response => {
				console.log('got config sub')
				console.log(response)
				this.settings.COMMUNITY_LOGO = response.logo;
				this.settings.COMMUNITY_NAME = response.sitename;
			},
			error => this.alertService.showError('Could not get your community info. Are you online?\n' + error));
	}

}
