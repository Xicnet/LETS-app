import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AppSettings } from '../app/app.settings';
import { HttpBasicAuth } from './HttpBasicAuth';
import { Member } from '../domain/Member';

@Injectable()
export class AuthService {
	private LOCAL_TOKEN_KEY: string = 'local_token';
	private hasToken: boolean;
	userInfo = new ReplaySubject<Member>(1);

	constructor(private settings: AppSettings,

	private httpBasicAuth: HttpBasicAuth) {
		this.hasToken = false;
		this.loadToken();
	}

	loadToken() {
		var token = window.localStorage.getItem(this.LOCAL_TOKEN_KEY);
		var rememberMe = true;
		if (!token) {
			token = window.sessionStorage.getItem(this.LOCAL_TOKEN_KEY);
			var rememberMe = false;
		}
		if (token) {
			var token_stored = JSON.parse(token);

			console.log('load token', this.hasToken, token_stored, token_stored.name)

			if(!this.hasToken && token_stored.name){
				console.log('try to reload');
				this.getUserInfo(token_stored.name, rememberMe);
			}

			this.setToken(token_stored);
		}
	}

	private storeToken(token, rememberMe) {
		console.log('store token', token, rememberMe)

		if (rememberMe) {
			window.localStorage.setItem(this.LOCAL_TOKEN_KEY, JSON.stringify(token));
		} else {
			window.sessionStorage.setItem(this.LOCAL_TOKEN_KEY, JSON.stringify(token));
		}
		this.setToken(token);
	}

	private destroyToken() {
		this.hasToken = false;
		window.localStorage.removeItem(this.LOCAL_TOKEN_KEY);
		window.sessionStorage.removeItem(this.LOCAL_TOKEN_KEY);
	}

	private setToken(token) {
		this.hasToken = true;
		this.userInfo.next(token);
	}

	isAuthenticated() {
		return this.hasToken;
	}

	public requestUserInfo(username, rememberMe): Observable<Member> {
		console.log('requestUserInfo', username, rememberMe, this.hasToken, this.settings.URL.members)
		//console.log(this.isAuthenticated());
		if(this.settings.URL.members){
			return this.httpBasicAuth
				.getWithAuth(`${this.settings.URL.members}?fragment=${username}&depth=1`)
				.map(response => {
					for (let id in response) {
						console.log('user loaded!')
						this.storeToken(response[id], rememberMe);
						break;
					}
					return response;
				});
		}
		else this.doLogout();
	}

	public getUserInfo(username, rememberMe): any{
		console.log('getUserInfo', username, rememberMe)

		this.requestUserInfo(username, rememberMe).subscribe(
			response => console.log('getUserInfo done'),
			// error => this.alertService.showError('Please check your details.\n' + error)
		);
	}

	doLogin(username, password, rememberMe): Observable<Member> {
		console.log('doLogin', username, rememberMe)
		this.httpBasicAuth.setAuthorizationToken(username, password, rememberMe);
		return this.requestUserInfo(username, rememberMe);
	}

	doLogout() {
		console.log('doLogout')
		return Observable.create(observer => {
			this.destroyToken();
			this.httpBasicAuth.logout();
			observer.next('');
			observer.complete();
		});
	}
}
