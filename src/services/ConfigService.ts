import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AppSettings } from '../app/app.settings';
import { HttpBasicAuth } from './HttpBasicAuth';
import { AlertService } from './AlertService';
import { Config } from '../domain/Config';
import { AuthService } from './AuthService';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ConfigService {
	appConfig = new ReplaySubject<Config>(1);
  dateFormat: String;

	constructor(private settings: AppSettings,
		private httpBasicAuth: HttpBasicAuth,
		private authService: AuthService,
		private alertService: AlertService,
		private translate: TranslateService
	) {
		// this.requestAppConfig().subscribe(
		// 	response => this.appConfig.next(response),
		// 	error => this.alertService.showError(error));
	}

	requestAppConfig(): Observable<Config> {
		// console.log(this.settings.URL.config)
		if(this.settings.URL.config) return this.httpBasicAuth.get(this.settings.URL.config);
	}

	initAppConfig(): void {
		if(!this.settings.WEB_SITE_URL){
			this.alertService.showError(('The app does not know your community URL - please log out to configure it'));
			this.authService.doLogout();
		}
		else this.requestAppConfig().subscribe(
			response => {
				console.log('got config sub')
				console.log(response)
				if(response.logo) this.settings.COMMUNITY_LOGO = response.logo;
				if(response.sitename) this.settings.COMMUNITY_NAME = response.sitename;
				if(response.language) this.settings.COMMUNITY_LANG = response.language;
				this.initTranslate();
			},
			error => this.alertService.showError(('Could not get your community info - please check the URL, and that you are online')+'.\n' + error));
	}

	initTranslate() {

		var lang = 'en'; // Set the default language for translation strings

    this.translate.setDefaultLang(lang);

		var override = this.settings.APP_ENGLISH;

		// console.log("c lang? "+this.settings.COMMUNITY_LANG);
		// console.log("english? "+override);
		// console.log("browser? "+this.translate.getBrowserLang());

		if(!override || override=='false'){
			// console.log("dont override");

			if(this.settings.COMMUNITY_LANG && this.settings.COMMUNITY_LANG !='false'){
				lang = this.settings.COMMUNITY_LANG; // Set your language here
			}
	    else if (this.translate.getBrowserLang() !== undefined) {
	      lang = this.translate.getBrowserLang();
	    }
		}

		this.translate.use(lang);

		console.log("localise: "+lang);

    if(lang=='en') {
      this.settings.DATE_FORMAT = "MMM DD, YYYY";
    } else if(lang=='fr') {
      this.settings.DATE_FORMAT = "DD/MMM/YYYY";
    }

    // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
    //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    // });
  }

}
