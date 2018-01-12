import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app/app.settings';
import { HttpBasicAuth } from './HttpBasicAuth';
import { Want } from '../domain/Want';
import { map } from 'lodash';

@Injectable()
export class WantService {
	private pageSize: number = 20;

	constructor(private settings: AppSettings,
		private httpBasicAuth: HttpBasicAuth) { }

	list(page, filter = ''): Observable<Array<Want>> {
		let offset = this.pageSize * (page - 1);
		return this.httpBasicAuth.getWithAuth(`${this.settings.URL.wants}?depth=2&offset=${offset}&limit=${this.pageSize}&sort=expires,desc${filter}`)
			.map((response: Array<Want>) => {
				response = map(response, (want: Want, key: any) => {
					if (!want.id) {
						want.id = key;
					}
					return want;
				});
				return response;
			});
	}

	get(id): Observable<Want> {
		return this.httpBasicAuth.getWithAuth(`${this.settings.URL.wants}/${id}?depth=2`);
	}

	delete(id): Observable<Want> {
		return this.httpBasicAuth.deleteWithAuth(`${this.settings.URL.wants}/${id}`);
	}

	post(want: Want): Observable<Want> {
		return this.httpBasicAuth.postWithAuth(this.settings.URL.wants, want);
	}

	describe(): Observable<any> {
		return this.httpBasicAuth.options(this.settings.URL.wants);
	}

	custom(href): Observable<any> {
		return this.httpBasicAuth.putWithAuth(`${this.settings.SERVER_URL}/${href}`, {});
	}

	patch(id, want: Want): Observable<Want> {
		return this.httpBasicAuth.patchWithAuth(`${this.settings.URL.wants}/${id}`, want);
	}

	save(want: Want, id): Observable<Want> {
		if(id) return this.patch(id, want);
		else return this.post(want);
	}

}
