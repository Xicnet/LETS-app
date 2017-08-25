import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import './rxjs-operators.ts';
import { AuthService } from '../services/AuthService';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class LetsApp {
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any }>;

  isDesktop: boolean = false;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private authService: AuthService) {

    this.authService.loadToken();
    if (this.authService.isAuthenticated()) {
      this.rootPage = HomePage;
    }

    this.initializeApp(statusBar, splashScreen);

    if (platform.is('core') || platform.is('browser')) {
        // This will only print when on desktop
        console.log("Running on a desktop!");
        this.isDesktop = true;
      }

  }

  initializeApp(statusBar, splashScreen) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
    });
  }
}
