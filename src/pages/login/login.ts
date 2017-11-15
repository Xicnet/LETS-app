import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AppSettings } from '../../app/app.settings';
import { AuthService } from '../../services/AuthService';
import { AlertService } from '../../services/AlertService';
import { HomePage } from '../home/home';
import * as $ from 'jquery';
import { ConfigService } from '../../services/ConfigService';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage implements OnInit, AfterContentInit {
	loginForm: FormGroup;
	private community_url: string;
	private username: string;
	private password: string;
	private rememberMe: boolean;

	constructor(private navCtrl: NavController,
		private formBuilder: FormBuilder,
		private settings: AppSettings,
		private authService: AuthService,
		private alertService: AlertService,
		private configService: ConfigService,
	) { }

	ngOnInit(): void {
		if(this.settings.WEB_SITE_URL) this.configService.initAppConfig();

		this.buildForm();
	}

	ngAfterContentInit(): void {
		$('div.page-login').height($('page-login').height());
	}

	doLogin() {
		this.community_url = this.loginForm.value.community_url;
		this.setCommunityURL();
		this.username = this.loginForm.value.username;
		this.password = this.loginForm.value.password;
		this.rememberMe = this.loginForm.value.rememberMe;
		this.authService.doLogin(this.username, this.password, this.rememberMe).subscribe(
			response => this.navCtrl.setRoot(HomePage),
			error => this.alertService.showError('Please check your details.\n' + error));
	}

	goToFullSite() {
		window.open(this.settings.WEB_SITE_URL, '_system', 'location=yes');
	}

	buildForm(): void {
		this.community_url = this.settings.WEB_SITE_URL;
		this.loginForm = this.formBuilder.group({
			'community_url': [this.community_url, Validators.required],
			'username': [this.username, Validators.required],
			'password': [this.password, Validators.required],
			'rememberMe': [this.rememberMe],
		});
		this.loginForm.valueChanges.subscribe(
			data => this.onValueChanged(data));
		this.onValueChanged(); // (re)set validation messages now
	}

	onValueChanged(data?: any) {
		if (!this.loginForm) { return; }
		const form = this.loginForm;
		for (const field in this.formErrors) {
			// clear previous error message (if any)
			this.formErrors[field] = '';
			const control = form.get(field);
			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}

	setCommunityURL(){
		// console.log(this.community_url);
		console.log(this.loginForm.value.community_url);
		if(this.loginForm.value.community_url){
			var old_url = this.settings.WEB_SITE_URL;
			this.settings.WEB_SITE_URL = this.loginForm.value.community_url;
			if(this.settings.WEB_SITE_URL !=old_url){
				this.configService.initAppConfig();
			}
			this.community_url = this.settings.WEB_SITE_URL; // cleaned up
			this.loginForm.value.community_url = this.settings.WEB_SITE_URL;
		}
	}

	formErrors = {
		'community_url': '',
		'username': '',
		'password': ''
	};

	validationMessages = {
		'community_url': {
			'required': 'Please enter the URL of your local community website'
		},
		'username': {
			'required': 'Email is required.'
		},
		'password': {
			'required': 'Password is required.'
		}
	};
}
