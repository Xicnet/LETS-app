import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {

	public get WEB_SITE_URL(): any {
		var opt = window.localStorage.getItem('website_url');
		if(opt) return opt;
		// return 'https://hamlets.communityforge.net'; // fallback
	}

	public set WEB_SITE_URL(link) {
		link = link.trim().replace(/\/+$/, ""); // remove trailing slash
		link = (link.indexOf('://') === -1) ? 'https://' + link : link;
		window.localStorage.setItem('website_url', link);
	}

	public get SERVER_URL(): any {
		if(this.WEB_SITE_URL) return `${this.WEB_SITE_URL}/commex`;
	}

	public get APP_NAME(): any {
		return 'Community Exchange';
	}

	public set COMMUNITY_NAME(opt) {
		window.localStorage.setItem('sitename', opt);
	}

	public get COMMUNITY_NAME(): any {
		var opt = window.localStorage.getItem('sitename');
		if(opt) return opt;
		else return 'Your Local Community';
	}

	public set COMMUNITY_LOGO(opt) {
		window.localStorage.setItem('logo', opt);
	}

	public get COMMUNITY_LOGO(): any {
		var opt = window.localStorage.getItem('logo');
		if(opt) return opt;
		// else return 'assets/images/community_logo.png';
	}

	public set COMMUNITY_LANG(opt) {
		window.localStorage.setItem('language', opt);
	}

	public get COMMUNITY_LANG(): any {
		var opt = window.localStorage.getItem('language');
		if(opt) return opt;
		else return 'en';
	}

	public set APP_VERSION(opt) {
		window.localStorage.setItem('version', opt);
	}

	public get APP_VERSION(): any {
		var opt = window.localStorage.getItem('version');
		if(opt) return opt;
		else return '0.x';
	}

	public set APP_ENGLISH(opt) {
		window.localStorage.setItem('in_english', opt);
	}

	public get APP_ENGLISH(): any {
		return window.localStorage.getItem('in_english');
	}


	public get URL(): any {
		if(this.SERVER_URL) return {
			config: `${this.SERVER_URL}/`,
			transactions: `${this.SERVER_URL}/transaction`,
			offers: `${this.SERVER_URL}/offer`,
			wants: `${this.SERVER_URL}/want`,
			members: `${this.SERVER_URL}/member`,
			contact: `${this.SERVER_URL}/contact`
		};
	}

}
