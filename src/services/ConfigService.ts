import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AppSettings } from '../app/app.settings';
import { HttpBasicAuth } from './HttpBasicAuth';
import { AlertService } from './AlertService';
import { Config } from '../domain/Config';
import { AuthService } from './AuthService';

@Injectable()
export class ConfigService {
	appConfig = new ReplaySubject<Config>(1);

	constructor(private settings: AppSettings,
		private httpBasicAuth: HttpBasicAuth,
		private authService: AuthService,
		private alertService: AlertService) {
		// this.requestAppConfig().subscribe(
		// 	response => this.appConfig.next(response),
		// 	error => this.alertService.showError(error));
	}

	requestAppConfig(): Observable<Config> {
		console.log(this.settings.URL.config)
		return this.httpBasicAuth.get(this.settings.URL.config);
	}

	initAppConfig(): void {
		if(!this.settings.WEB_SITE_URL){
			this.alertService.showError('The app does not know your community URL. Please log out to configure it.\n');
			this.authService.doLogout();
		}
		else this.requestAppConfig().subscribe(
			response => {
				console.log('got config sub')
				console.log(response)
				this.settings.COMMUNITY_LOGO = response.logo;
				this.settings.COMMUNITY_NAME = response.sitename;
			},
			error => this.alertService.showError('Could not get your community info. Are you online? If so, please check the URL. \n' + error));
	}

}
