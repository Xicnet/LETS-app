webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    AlertService.prototype.showErrorBox = function (message) {
        console.log('showError');
        console.error(message);
        var show = ((message.error) ? message.error : (message) ? message : ('Unknown error'));
        return this.alertCtrl.create({
            title: ('Error'),
            subTitle: show,
            buttons: ['OK']
        }).present();
    };
    AlertService.prototype.showToast = function (message) {
        console.log('showToast', message);
        return this.toastCtrl.create({
            message: message,
            position: 'middle',
            showCloseButton: true,
            duration: 5000
        }).present();
    };
    AlertService.prototype.showError = function (message, extra) {
        console.log('showError():');
        console.error(message);
        var show = 'Error: ' + ((message.error) ? message.error : (message) ? message : ('Unknown')) + (extra ? ' - ' + extra : '');
        return this.showToast(show);
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=AlertService.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_offers_offers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_addOffer_addOffer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_wants_wants__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_addWant_addWant__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addTransaction_addTransaction__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_members_members__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_userProfile_userProfile__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__offerDetail_offerDetail__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menu_option__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_ConfigService__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_qr_scanner__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var HomePage = /** @class */ (function () {
    function HomePage(viewCtrl, navCtrl, popoverCtrl, authService, settings, configService, platform, appVersion, qrScanner) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.settings = settings;
        this.configService = configService;
        this.platform = platform;
        this.appVersion = appVersion;
        this.qrScanner = qrScanner;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                _this.appVersion.getVersionNumber().then(function (version) {
                    // this.version = version;
                    _this.settings.APP_VERSION = version;
                });
            }
        });
        this.configService.initAppConfig();
        this.authService.userInfo.subscribe(function (userInfo) {
            _this.member = userInfo;
            _this.menus = [
                {
                    header: ('I need something'),
                    menu_items: [
                        {
                            title: ('Browse offers'),
                            icon: 'images',
                            page: __WEBPACK_IMPORTED_MODULE_4__pages_offers_offers__["a" /* OffersPage */],
                            params: {
                                currentUser: _this.member.id
                            }
                        },
                        {
                            title: ('Post my need'),
                            icon: 'megaphone',
                            page: __WEBPACK_IMPORTED_MODULE_7__pages_addWant_addWant__["a" /* AddWantPage */],
                        }
                    ]
                },
                {
                    header: ('I have something to offer'),
                    menu_items: [
                        {
                            title: ('Browse needs'),
                            icon: 'paper',
                            page: __WEBPACK_IMPORTED_MODULE_6__pages_wants_wants__["a" /* WantsPage */],
                            params: {
                                currentUser: _this.member.id
                            }
                        },
                        {
                            title: ('Post my offer'),
                            icon: 'clipboard',
                            page: __WEBPACK_IMPORTED_MODULE_5__pages_addOffer_addOffer__["a" /* AddOfferPage */]
                        }
                    ]
                },
                {
                    header: ("I made a trade"),
                    menu_items: [
                        {
                            title: ('I received something'),
                            icon: 'basket',
                            page: __WEBPACK_IMPORTED_MODULE_8__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                            params: {
                                title: ('As Buyer'),
                                fields: {
                                    payer: {
                                        default: _this.member.name,
                                        disabled: true
                                    }
                                },
                            }
                        },
                        {
                            title: ('I provided something'),
                            icon: 'filing',
                            page: __WEBPACK_IMPORTED_MODULE_8__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                            params: {
                                title: ('As Seller'),
                                fields: {
                                    payee: {
                                        default: _this.member.name,
                                        disabled: true
                                    }
                                }
                            }
                        },
                        {
                            title: ('Scan a QR code'),
                            icon: 'barcode',
                            action: 'scanQR',
                        },
                    ]
                },
                {
                    header: ('Community'),
                    menu_items: [
                        {
                            title: ('Find a member'),
                            icon: 'people',
                            page: __WEBPACK_IMPORTED_MODULE_10__pages_members_members__["a" /* MembersPage */],
                            params: {
                                operaton: 'Find a'
                            },
                        },
                        {
                            title: ('View transactions'),
                            icon: 'stats',
                            page: __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__["a" /* TransactionsPage */]
                        },
                    ]
                },
                {
                    header: ('My account'),
                    menu_items: [
                        {
                            title: ('View my profile'),
                            icon: 'person',
                            page: __WEBPACK_IMPORTED_MODULE_11__pages_memberDetail_memberDetail__["a" /* MemberDetailPage */],
                            params: {
                                id: _this.member.id
                            },
                        },
                        {
                            title: ('Edit my details'),
                            icon: 'contact',
                            page: __WEBPACK_IMPORTED_MODULE_12__pages_userProfile_userProfile__["a" /* ProfilePage */]
                        },
                        {
                            title: ('View my transactions'),
                            icon: 'stats',
                            page: __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__["a" /* TransactionsPage */],
                            params: {
                                filter: "&involving=" + _this.member.id
                            },
                        },
                        {
                            title: ('View my offers'),
                            icon: 'briefcase',
                            page: __WEBPACK_IMPORTED_MODULE_4__pages_offers_offers__["a" /* OffersPage */],
                            params: {
                                filter: "&user_id=" + _this.member.id,
                                filterName: 'Offers by ' + _this.member.name,
                                myActions: true,
                                is_filtered: true
                            },
                        },
                        {
                            title: ('View my needs'),
                            icon: 'list',
                            page: __WEBPACK_IMPORTED_MODULE_6__pages_wants_wants__["a" /* WantsPage */],
                            params: {
                                filter: "&user_id=" + _this.member.id,
                                filterName: 'Needs by ' + _this.member.name,
                                myActions: true,
                                is_filtered: true
                            }
                        },
                    ]
                }
            ];
        });
    };
    HomePage.prototype.goToPage = function (menuEntry) {
        var page = menuEntry.page;
        if (page) {
            this.navCtrl.push(page, menuEntry.params);
            // if (this.popover) {
            // 	this.popover.dismiss();
            // }
            // this.viewCtrl.dismiss();
        }
        else if (menuEntry.action && menuEntry.action == 'scanQR') {
            this.scanQR();
        }
    };
    HomePage.prototype.showOptions = function (menuEntry, $event) {
        if (menuEntry.options && menuEntry.options.length) {
            this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_14__menu_option__["a" /* MenuOptionPopover */], {
                options: menuEntry.options
            });
            this.popover.present({
                ev: $event
            });
        }
    };
    HomePage.prototype.doLogout = function () {
        var _this = this;
        this.authService.doLogout().subscribe(function (response) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]); });
    };
    HomePage.prototype.goToURL = function (URL) {
        window.open(URL, '_system', 'location=yes');
    };
    HomePage.prototype.goToFullSite = function () {
        this.goToURL(this.settings.WEB_SITE_URL);
    };
    HomePage.prototype.scanQR = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                console.log("camera permission was granted");
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    scanSub_1.unsubscribe(); // stop scanning
                    _this.qrScanner.hide(); // hide camera preview
                    _this.hideQR();
                    if (text) {
                        var action = _this.getURLParameterByName(text, "qr_action");
                        var id = _this.getURLParameterByName(text, "qr_id");
                        console.log('QR result', action, id);
                        if (action == 'offer') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__offerDetail_offerDetail__["a" /* OfferDetailPage */], {
                                id: id
                            });
                        }
                        else if (action == 'member') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_memberDetail_memberDetail__["a" /* MemberDetailPage */], {
                                id: id
                            });
                        }
                        // this.goToURL(text); // TEMP
                    }
                });
                // TODO: Make the webview transparent so the video preview is visible behind it. Be sure to make any opaque HTML elements transparent here to avoid covering the video.
                // show camera preview
                // this.qrScanner.show();
                _this.qrScanner.show().then(function (data) {
                    console.log('success showing camera');
                    _this.QR_visible = true;
                    window.document.querySelector('ion-app').classList.add('cameraView');
                    var TIME_IN_MS = 10000;
                    var hideFooterTimeout = setTimeout(function () {
                        // this.qrScanner.hide(); // hide camera preview
                        _this.hideQR();
                    }, TIME_IN_MS);
                    _this.reset_back_button_action = _this.platform.registerBackButtonAction(function () {
                        if (_this.QR_visible)
                            _this.hideQR();
                        else
                            _this.platform.exitApp();
                    });
                }, function (err) {
                    console.log('Error showing camera');
                    _this.hideQR();
                });
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                console.log("camera permission was permanently denied. you must use QRScanner.openSettings() method to guide the user to the settings page. then they can grant the permission from there");
            }
            else {
                console.log("permission was denied, but not permanently. You can ask for permission again at a later time");
            }
        })
            .catch(function (e) { return console.log('QR Error:', e); });
    };
    HomePage.prototype.hideQR = function () {
        this.qrScanner.hide();
        this.QR_visible = false;
        this.reset_back_button_action();
        window.document.querySelector('ion-app').classList.remove('cameraView');
    };
    HomePage.prototype.getURLParameterByName = function (url, name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(url);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><a href="#" (click)="goToFullSite()">{{ settings.COMMUNITY_NAME || settings.APP_NAME }}</a></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false">\n  <ion-list class="home-header">\n    <ion-item>\n      <p [innerHTML]="member && member.balance" class="balance" item-end></p>\n      <ion-avatar item-start>\n        <img [src]="member && member.image || member && member.portrait || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n      <h2 translate [translateParams]="{name: member.name }">Hello!</h2>\n      <p translate [translateParams]="{locality: member.locality || \'your area\' }">What\'s up in your area today?</p>\n    </ion-item>\n  </ion-list>\n\n<ion-list class="home-nav">\n	<ng-container *ngFor="let menu of menus">\n\n		<ion-list-header *ngIf="menu.header">{{ menu.header | translate }}</ion-list-header>\n\n		<ion-item *ngFor="let menuEntry of menu.menu_items" (click)="goToPage(menuEntry);showOptions(menuEntry, $event)">\n      <ion-icon [name]="menuEntry.icon" item-start></ion-icon>\n			{{ menuEntry.title | translate }}\n      <i class="ion-arrow-down-b" *ngIf="menuEntry.options && menuEntry.options.length" item-end></i>\n    </ion-item>\n\n  </ng-container>\n\n	<ion-item (click)="doLogout()">\n    <ion-icon name="log-out" item-start></ion-icon>\n    {{ \'Log Out\' | translate }}\n	</ion-item>\n\n	<ion-list-header>{{ settings.APP_NAME }} <span *ngIf="settings.APP_VERSION">{{settings.APP_VERSION}}</span></ion-list-header>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_16__services_ConfigService__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_OfferService__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addOffer_addOffer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_base64_to_gallery__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OfferDetailPage = /** @class */ (function () {
    function OfferDetailPage(params, viewCtrl, navCtrl, loadingCtrl, popoverCtrl, offerService, authService, alertService, settings, element, base64ToGallery) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.offerService = offerService;
        this.authService = authService;
        this.alertService = alertService;
        this.settings = settings;
        this.element = element;
        this.base64ToGallery = base64ToGallery;
        this.QRData = null;
        this.QRCode = null;
        this.QRImg = null;
    }
    OfferDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.imageExpanded = false;
            _this.loader = _this.loadingCtrl.create({
                content: ('Please wait') + '...'
            });
            _this.loader.present();
            _this.authService.userInfo.subscribe(function (userInfo) {
                _this.currentUser = userInfo.id;
                _this.currentMember = userInfo;
                console.log(_this.currentMember);
            });
            _this.offerService.describe().subscribe(function (response) {
                _this.definitionOffer = response;
                _this.offerService.get(_this.params.get('id')).subscribe(function (response) {
                    var _loop_1 = function (i) {
                        var field = _this.definitionOffer.POST[i];
                        if (field.type === 'select') {
                            if (field.multiple) {
                                response["$" + i] = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["map"])(response[i], function (option) { return field.options[option]; }).join(', ');
                            }
                            else {
                                response["$" + i] = field.options[response[i]];
                            }
                        }
                    };
                    for (var i in _this.definitionOffer.POST) {
                        _loop_1(i);
                    }
                    _this.offer = response;
                    _this.QRData = _this.settings.WEB_SITE_URL + '/node/' + _this.offer.id + '?qr_action=offer&qr_id=' + _this.offer.id;
                    _this.loader.dismiss();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }, function (error) {
                _this.alertService.showError(error);
                _this.loader.dismiss();
            });
        });
    };
    OfferDetailPage.prototype.showMember = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: userId
        });
    };
    OfferDetailPage.prototype.expandImage = function () {
        this.imageExpanded = !this.imageExpanded;
    };
    OfferDetailPage.prototype.showActions = function () {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
            operation: ('Offer'),
            status: 'Menu',
            options: []
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present();
    };
    OfferDetailPage.prototype.editOffer = function (offer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__addOffer_addOffer__["a" /* AddOfferPage */], {
            offer: offer
        });
    };
    OfferDetailPage.prototype.deleteOffer = function (id) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionOffer.POST,
            operation: ('Delete Offer')
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteOfferConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteOfferConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.offerService.delete(id).subscribe(function (response) {
                    _this.loader.dismiss();
                    // this.initPage();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    OfferDetailPage.prototype.customAction = function (label, href, confirm) {
        var _this = this;
        console.log(label, href, confirm);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            operation: label
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteOfferConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteOfferConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.offerService.custom(href).subscribe(function (response) {
                    _this.loader.dismiss();
                    // this.initPage();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    OfferDetailPage.prototype.createCode = function () {
        this.QRCode = this.QRData;
    };
    OfferDetailPage.prototype.saveQR = function () {
        var _this = this;
        if (this.QRCode) {
            var nodes = this.element.nativeElement.querySelectorAll('.qrcode img');
            nodes.forEach(function (node) {
                if (node.src)
                    _this.QRImg = node.src;
                if (_this.QRImg)
                    _this.base64ToGallery.base64ToGallery(_this.QRImg, { prefix: 'QRcode' }).then(function (res) { return _this.alertService.showToast('Saved QR code to your photo gallery'); }, function (err) { return _this.alertService.showError('Error saving QR to your photo gallery ', err); });
            });
        }
    };
    OfferDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offer-detail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offerDetail/offerDetail.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{ \'Offer Details\' | translate }}</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-card class="app-item-details" *ngIf="offer">\n		<h2 class="title">{{ offer.title }}</h2>\n\n		<div class="image" [class.expanded]="imageExpanded" *ngIf="offer.image" (click)="expandImage()">\n			<img [src]="offer.image">\n		</div>\n\n		<div class="description" [innerHTML]="offer.description"></div>\n		<ion-row>\n			<ion-col col-6 (click)="showMember(offer.user_id)">\n				<ion-item class="item-avatar">\n					<ion-avatar>\n						<img [src]="offer.user_id_ref.portrait || \'assets/images/default_user.jpg\'">\n					</ion-avatar>\n					<p>\n						{{ offer.user_id_ref.name }}\n					</p>\n				</ion-item>\n			</ion-col>\n\n			<ion-col col-6>\n				<ion-item>\n					<p *ngIf="offer.$category">{{ \'Category\' | translate }}: <b>{{ offer.$category }}</b></p>\n					<p *ngIf="offer.changed">{{ \'Posted\' | translate }}: <b>{{ offer.changed }}</b></p>\n					<p *ngIf="offer.expires">{{ \'Expires\' | translate }}: <b>{{ offer.expires }}</b></p>\n\n					<ng-container *ngIf="currentUser == offer.user_id">\n						<button class="my-actions edit" ion-button (click)="editOffer(offer)">Edit</button>\n						<button class="my-actions delete" ion-button (click)="deleteOffer(offer.id)">Delete</button>\n					</ng-container>\n\n					<ng-container *ngFor="let link of offer._links">\n						<button *ngIf="link.rel !=\'self\'" class="my-actions edit" ion-button (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n					</ng-container>\n\n					<button ion-button full icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon>Show QR code</button>\n\n				</ion-item>\n			</ion-col>\n		</ion-row>\n\n		<ngx-qrcode [qrc-value]="QRCode" (click)="saveQR()"></ngx-qrcode>\n\n	</ion-card>\n</ion-content>\n<!-- <ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offerDetail/offerDetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_OfferService__["a" /* OfferService */],
            __WEBPACK_IMPORTED_MODULE_7__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_10__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */]])
    ], OfferDetailPage);
    return OfferDetailPage;
}());

//# sourceMappingURL=offerDetail.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddTransactionPage = /** @class */ (function () {
    function AddTransactionPage(viewCtrl, navParams, loadingCtrl, popoverCtrl, authService, transactionService, alertService) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.transactionService = transactionService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
        this.authService.userInfo.subscribe(function (userInfo) { return _this.member = userInfo; });
    }
    AddTransactionPage_1 = AddTransactionPage;
    AddTransactionPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navParams.data) {
            this.title = this.navParams.data.title;
        }
        this.isLoaded = false;
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.transactionService.describe().subscribe(function (response) {
                    _this.isLoaded = true;
                    _this.definitionTransaction = response;
                    if (_this.definitionTransaction.POST && _this.navParams.data && _this.navParams.data.fields) {
                        for (var i in _this.navParams.data.fields) {
                            if (_this.definitionTransaction.POST[i]) {
                                Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["assign"])(_this.definitionTransaction.POST[i], _this.navParams.data.fields[i]);
                            }
                        }
                    }
                    _this.fields = _this.definitionTransaction.POST;
                    _this.loader.dismiss();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
    };
    AddTransactionPage.prototype.onChanged = function (options) {
        this.transaction = options.value;
        this.isValid = options.isValid;
    };
    AddTransactionPage.prototype.addTransaction = function () {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionTransaction.POST,
            operation: ('Transaction')
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.transactionService.post(_this.transaction).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: ('Transaction'),
                        options: [{
                                title: ('Record Transaction - as a Seller'),
                                icon: 'ion-edit',
                                page: AddTransactionPage_1,
                                params: {
                                    title: ('as Seller'),
                                    fields: {
                                        payee: {
                                            default: _this.member.name,
                                            disabled: true
                                        }
                                    }
                                }
                            }, {
                                title: ('Record Transaction - as a Buyer'),
                                icon: 'ion-edit',
                                page: AddTransactionPage_1,
                                params: {
                                    title: ('as Buyer'),
                                    fields: {
                                        payer: {
                                            default: _this.member.name,
                                            disabled: true
                                        }
                                    }
                                }
                                // }, {
                                // 	title: 'List Transactionings',
                                // 	icon: 'ion-stats-bars',
                                // 	page: TransactionsPage
                            }]
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    AddTransactionPage = AddTransactionPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-transaction',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addTransaction/addTransaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Record Transaction\' | translate }} - {{ title | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addTransaction()">{{ \'Submit\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addTransaction/addTransaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], AddTransactionPage);
    return AddTransactionPage;
    var AddTransactionPage_1;
}());

//# sourceMappingURL=addTransaction.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addTransaction_addTransaction__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transactionDetail_transactionDetail__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(menuCtrl, navCtrl, modalCtrl, authService, transactionService, navParams, loadingCtrl, popoverCtrl, alertService) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.transactionService = transactionService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertService = alertService;
        this.canPost = false;
        this.success = false;
        this.menuCtrl.enable(true, 'app-menu');
        this.authService.userInfo.subscribe(function (userInfo) {
            _this.username = userInfo.name;
        });
    }
    TransactionsPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
        }
        this.transactionService.describe()
            .subscribe(function (response) {
            _this.definitionTransaction = response;
            _this.canPost = !!_this.definitionTransaction.POST;
        }, function (error) { return _this.alertService.showError('Connection problem!'); });
        this.loadTransactions();
    };
    TransactionsPage.prototype.loadTransactions = function () {
        var _this = this;
        this.transactionService.list(this.filter)
            .subscribe(function (response) { return _this.transactions = response; }, function (error) { return _this.alertService.showError('Connection problem!'); });
    };
    TransactionsPage.prototype.addTransaction = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__addTransaction_addTransaction__["a" /* AddTransactionPage */]);
        modal.onDidDismiss(function (data) {
            if (data === void 0) { data = {}; }
            _this.success = data.success;
            _this.loadTransactions();
        });
        modal.present();
    };
    TransactionsPage.prototype.showDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__transactionDetail_transactionDetail__["a" /* TransactionDetailPage */], {
            id: id
        });
    };
    TransactionsPage.prototype.customAction = function (label, href, confirm) {
        var _this = this;
        console.log(label, href, confirm);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            operation: label
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteOfferConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteOfferConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.transactionService.custom(href).subscribe(function (response) {
                    _this.ngOnInit();
                    _this.loader.dismiss();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactions/transactions.html"*/'<ion-header>\n  <ion-navbar>\n		<ion-title>{{ \'Transactions\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="ui success message" *ngIf="success">\n    <i class="close icon"></i>\n    <div class="header">{{ \'Success!\' | translate }}</div>\n    <p>{{ \'New transaction created\' | translate }}.</p>\n  </div>\n\n  <ion-list class="app-items">\n    <ion-item *ngFor="let transaction of transactions">\n\n      <h6>{{ transaction.description }}</h6>\n      <p class="description">\n        <span [innerHTML]="transaction.amount"></span> {{ \'from\' | translate }} {{ transaction.payer_ref && transaction.payer_ref.name || transaction.payer }} {{ \'to\' | translate }} {{ transaction.payee_ref && transaction.payee_ref.name || transaction.payee }}\n      </p>\n\n      <!-- <button ion-button (click)="showDetails(transaction.id)">View</button> -->\n\n      <ng-container *ngFor="let link of transaction._links">\n        <button *ngIf="link.rel !=\'self\' && link.rel !=\'view\'" class="edit" ion-button  (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n        <button *ngIf="link.rel ==\'self\' || link.rel ==\'view\'" class="view" ion-button  (click)="showDetails(transaction.id)">{{link.label || \'Details\'}}</button>\n      </ng-container>\n\n    </ion-item>\n  </ion-list>\n\n  <!-- <button *ngIf="canPost" class="ui add-new button" (click)="addTransaction()">\n    <i class="plus icon"></i> New Transaction\n  </button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactions/transactions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigService = /** @class */ (function () {
    function ConfigService(settings, httpBasicAuth, authService, alertService, translate) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.authService = authService;
        this.alertService = alertService;
        this.translate = translate;
        this.appConfig = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        // this.requestAppConfig().subscribe(
        // 	response => this.appConfig.next(response),
        // 	error => this.alertService.showError(error));
    }
    ConfigService.prototype.requestAppConfig = function () {
        // console.log(this.settings.URL.config)
        if (this.settings.URL.config)
            return this.httpBasicAuth.get(this.settings.URL.config);
    };
    ConfigService.prototype.initAppConfig = function () {
        var _this = this;
        if (!this.settings.WEB_SITE_URL) {
            this.alertService.showError(('The app does not know your community URL - please log out to configure it'));
            this.authService.doLogout();
        }
        else
            this.requestAppConfig().subscribe(function (response) {
                console.log('got config sub');
                console.log(response);
                if (response.logo)
                    _this.settings.COMMUNITY_LOGO = response.logo;
                if (response.sitename)
                    _this.settings.COMMUNITY_NAME = response.sitename;
                if (response.language)
                    _this.settings.COMMUNITY_LANG = response.language;
                _this.initTranslate();
            }, function (error) { return _this.alertService.showError(('Could not get your community info - please check the URL, and that you are online') + '.\n' + error); });
    };
    ConfigService.prototype.initTranslate = function () {
        var lang = 'en'; // Set the default language for translation strings
        this.translate.setDefaultLang(lang);
        var override = this.settings.APP_ENGLISH;
        // console.log("c lang? "+this.settings.COMMUNITY_LANG);
        // console.log("english? "+override);
        // console.log("browser? "+this.translate.getBrowserLang());
        if (!override || override == 'false') {
            // console.log("dont override");
            if (this.settings.COMMUNITY_LANG && this.settings.COMMUNITY_LANG != 'false') {
                lang = this.settings.COMMUNITY_LANG; // Set your language here
            }
            else if (this.translate.getBrowserLang() !== undefined) {
                lang = this.translate.getBrowserLang();
            }
        }
        this.translate.use(lang);
        console.log("localise: " + lang);
        // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
        //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        // });
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_3__HttpBasicAuth__["a" /* HttpBasicAuth */],
            __WEBPACK_IMPORTED_MODULE_5__AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__AlertService__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], ConfigService);
    return ConfigService;
}());

//# sourceMappingURL=ConfigService.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HttpBasicAuth__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.LOCAL_TOKEN_KEY = 'local_token';
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.hasToken = false;
        this.loadToken();
    }
    AuthService.prototype.loadToken = function () {
        var token = window.localStorage.getItem(this.LOCAL_TOKEN_KEY);
        var rememberMe = true;
        if (!token) {
            token = window.sessionStorage.getItem(this.LOCAL_TOKEN_KEY);
            rememberMe = false;
        }
        if (token) {
            var token_stored = JSON.parse(token);
            console.log('load token', this.hasToken, token_stored, token_stored.name);
            if (!this.hasToken && token_stored.name) {
                console.log('try to reload');
                this.getUserInfo(token_stored.name, rememberMe);
            }
            this.setToken(token_stored);
        }
    };
    AuthService.prototype.storeToken = function (token, rememberMe) {
        console.log('store token', token, rememberMe);
        if (rememberMe) {
            window.localStorage.setItem(this.LOCAL_TOKEN_KEY, JSON.stringify(token));
        }
        else {
            window.sessionStorage.setItem(this.LOCAL_TOKEN_KEY, JSON.stringify(token));
        }
        this.setToken(token);
    };
    AuthService.prototype.destroyToken = function () {
        this.hasToken = false;
        window.localStorage.removeItem(this.LOCAL_TOKEN_KEY);
        window.sessionStorage.removeItem(this.LOCAL_TOKEN_KEY);
    };
    AuthService.prototype.setToken = function (token) {
        this.hasToken = true;
        this.userInfo.next(token);
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.hasToken;
    };
    AuthService.prototype.requestUserInfo = function (username, rememberMe) {
        var _this = this;
        console.log('requestUserInfo', username, rememberMe, this.hasToken, this.settings.URL.members);
        //console.log(this.isAuthenticated());
        if (this.settings.URL.members) {
            return this.httpBasicAuth
                .getWithAuth(this.settings.URL.members + "?fragment=" + username + "&depth=1")
                .map(function (response) {
                for (var id in response) {
                    console.log('user loaded!');
                    _this.storeToken(response[id], rememberMe);
                    break;
                }
                return response;
            });
        }
        else
            this.doLogout();
    };
    AuthService.prototype.getUserInfo = function (username, rememberMe) {
        console.log('getUserInfo', username, rememberMe);
        this.requestUserInfo(username, rememberMe).subscribe(function (response) { return console.log('getUserInfo done'); });
    };
    AuthService.prototype.doLogin = function (username, password, rememberMe) {
        console.log('doLogin', username, rememberMe);
        this.httpBasicAuth.setAuthorizationToken(username, password, rememberMe);
        return this.requestUserInfo(username, rememberMe);
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        console.log('doLogout');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.destroyToken();
            _this.httpBasicAuth.logout();
            observer.next('');
            observer.complete();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_4__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings.prototype, "WEB_SITE_URL", {
        get: function () {
            var opt = window.localStorage.getItem('website_url');
            if (opt)
                return opt;
            // return 'https://hamlets.communityforge.net'; // fallback
        },
        set: function (link) {
            link = link.trim().replace(/\/+$/, ""); // remove trailing slash
            link = (link.indexOf('://') === -1) ? 'https://' + link : link;
            window.localStorage.setItem('website_url', link);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "SERVER_URL", {
        get: function () {
            if (this.WEB_SITE_URL)
                return this.WEB_SITE_URL + "/commex";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "APP_NAME", {
        get: function () {
            return 'Community Exchange';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "COMMUNITY_NAME", {
        get: function () {
            var opt = window.localStorage.getItem('sitename');
            if (opt)
                return opt;
            else
                return 'Your Local Community';
        },
        set: function (opt) {
            window.localStorage.setItem('sitename', opt);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "COMMUNITY_LOGO", {
        get: function () {
            var opt = window.localStorage.getItem('logo');
            if (opt)
                return opt;
            // else return 'assets/images/community_logo.png';
        },
        set: function (opt) {
            window.localStorage.setItem('logo', opt);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "COMMUNITY_LANG", {
        get: function () {
            var opt = window.localStorage.getItem('language');
            if (opt)
                return opt;
            else
                return 'en';
        },
        set: function (opt) {
            window.localStorage.setItem('language', opt);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "APP_VERSION", {
        get: function () {
            var opt = window.localStorage.getItem('version');
            if (opt)
                return opt;
            else
                return '0.x';
        },
        set: function (opt) {
            window.localStorage.setItem('version', opt);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "APP_ENGLISH", {
        get: function () {
            return window.localStorage.getItem('in_english');
        },
        set: function (opt) {
            window.localStorage.setItem('in_english', opt);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "URL", {
        get: function () {
            if (this.SERVER_URL)
                return {
                    config: this.SERVER_URL + "/",
                    transactions: this.SERVER_URL + "/transaction",
                    offers: this.SERVER_URL + "/offer",
                    wants: this.SERVER_URL + "/want",
                    members: this.SERVER_URL + "/member",
                    contact: this.SERVER_URL + "/contact"
                };
        },
        enumerable: true,
        configurable: true
    });
    AppSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AppSettings);
    return AppSettings;
}());

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationBuilderComponent = /** @class */ (function () {
    function ConfirmationBuilderComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    ConfirmationBuilderComponent.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.fields = this.navParams.data.fields;
            this.operation = this.navParams.data.operation;
        }
    };
    ConfirmationBuilderComponent.prototype.doCancel = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmationBuilderComponent.prototype.doConfirm = function () {
        this.viewCtrl.dismiss({
            hasConfirmed: true
        });
    };
    ConfirmationBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirmation-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/confirmationBuilder/confirmationBuilder.html"*/'<div class="app-confirm-operation">\n	<h6>{{ \'Confirm\' | translate }} {{ operation | translate }}</h6>\n	<ion-grid>\n	  <ion-row *ngFor="let field of fields | keys">\n	    <ion-col class="label" col-6 *ngIf="field.$value">{{ field.label }}</ion-col>\n	    <ion-col class="value" col-6 *ngIf="field.$value" [ngSwitch]="field.type" >\n	    	<div *ngSwitchCase="\'image\'" class="image">\n					<img *ngIf="field.$value" [src]="field.$value">\n				</div>\n				<div *ngSwitchDefault>{{ field.$value }}</div>\n	    </ion-col>\n	  </ion-row>\n	  <ion-row class="actions">\n	  	<ion-col col-6>\n	  		<button class="cancel" (click)="doCancel()">\n	  			<i class="ion-ios-arrow-back"></i> {{ \'Back\' | translate }}\n	  		</button>\n	  	</ion-col>\n	  	<ion-col col-6>\n	  		<button class="confim" (click)="doConfirm()">{{ \'Confirm\' | translate }}</button>\n	  	</ion-col>\n	  </ion-row>\n	</ion-grid>\n</div>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/confirmationBuilder/confirmationBuilder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfirmationBuilderComponent);
    return ConfirmationBuilderComponent;
}());

//# sourceMappingURL=confirmationBuilder.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MemberService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memberContact_memberContact__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_offers_offers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64_to_gallery__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_settings__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MemberDetailPage = /** @class */ (function () {
    function MemberDetailPage(params, viewCtrl, navCtrl, loadingCtrl, memberService, popoverCtrl, alertService, settings, element, base64ToGallery) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.memberService = memberService;
        this.popoverCtrl = popoverCtrl;
        this.alertService = alertService;
        this.settings = settings;
        this.element = element;
        this.base64ToGallery = base64ToGallery;
        this.QRData = null;
        this.QRCode = null;
        this.QRImg = null;
    }
    MemberDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.loader = _this.loadingCtrl.create({
                content: ('Please wait') + '...'
            });
            _this.loader.present();
            _this.memberService.get(_this.params.get('id')).subscribe(function (response) {
                _this.member = response;
                _this.loader.dismiss();
                _this.QRData = _this.settings.WEB_SITE_URL + '/user/' + _this.member.id + '?qr_action=member&qr_id=' + _this.member.id;
            }, function (error) {
                _this.alertService.showError(error);
                _this.loader.dismiss();
            });
        });
    };
    MemberDetailPage.prototype.customAction = function (label, href, confirm) {
        var _this = this;
        console.log(label, href, confirm);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            operation: label
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteOfferConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteOfferConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.memberService.custom(href).subscribe(function (response) {
                    _this.loader.dismiss();
                    // this.initPage();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    MemberDetailPage.prototype.contactMember = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__memberContact_memberContact__["a" /* ContactMemberPage */], {
            to_id: this.params.get('id')
        });
    };
    MemberDetailPage.prototype.memberOffers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_offers_offers__["a" /* OffersPage */], {
            filter: '&user_id=' + this.params.get('id'),
            filterName: 'Offers by ' + this.member.name,
            is_filtered: true
        });
    };
    MemberDetailPage.prototype.memberWants = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__["a" /* WantsPage */], {
            filter: '&user_id=' + this.params.get('id'),
            filterName: 'Needs by ' + this.member.name,
            is_filtered: true
        });
    };
    MemberDetailPage.prototype.createCode = function () {
        this.QRCode = this.QRData;
    };
    MemberDetailPage.prototype.saveQR = function () {
        var _this = this;
        if (this.QRCode) {
            var nodes = this.element.nativeElement.querySelectorAll('.qrcode img');
            nodes.forEach(function (node) {
                if (node.src)
                    _this.QRImg = node.src;
                if (_this.QRImg)
                    _this.base64ToGallery.base64ToGallery(_this.QRImg, { prefix: 'QRcode' }).then(function (res) { return _this.alertService.showToast('Saved QR code to your photo gallery'); }, function (err) { return _this.alertService.showError('Error saving QR to your photo gallery ', err); });
            });
        }
    };
    MemberDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-memberDetail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberDetail/memberDetail.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{ \'Member Details\' | translate }}</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-card class="app-item-details" *ngIf="member">\n\n		<ion-item>\n			<ion-avatar item-start>\n				<img [src]="member.portrait || \'assets/images/default_user.jpg\'">\n			</ion-avatar>\n\n			<h2 class="title">{{ member.name }}</h2>\n\n			<button class="view" ion-button (click)="contactMember()">{{ \'Message\' | translate }}</button>\n\n			<span class="subtitle" *ngIf="member.mail">\n				<a ion-button icon-start href="mailto:{{member.mail}}">\n					<ion-icon name="mail"></ion-icon>\n					{{ member.mail }}\n				</a>\n			</span>\n\n			<span class="subtitle" *ngIf="member.phone">\n				<a ion-button icon-start href="tel:{{member.phone}}">\n					<ion-icon name="call"></ion-icon>\n					{{ member.phone }}\n				</a>\n			</span>\n\n			<ion-item class="balance" *ngIf="member.balance">\n				<ion-avatar item-start>\n					<ion-icon name="trending-up"></ion-icon>\n				</ion-avatar>\n				<p [innerHTML]="member && member.balance"></p>\n			</ion-item>\n\n\n\n		</ion-item>\n\n		<ion-row>\n			<ion-col>\n				<ion-item>\n					<button class="view" ion-button icon-left (click)="memberOffers()"><ion-icon name="images"></ion-icon> {{ \'Offers\' | translate }}</button>\n					<button class="view" ion-button icon-left (click)="memberWants()"><ion-icon name="paper"></ion-icon> {{ \'Needs\' | translate }}</button>\n\n					<ng-container *ngFor="let link of member._links">\n						<button *ngIf="link.rel !=\'self\'" class="edit" ion-button (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n					</ng-container>\n\n					<button ion-button icon-left (click)="createCode()"><ion-icon name="barcode"></ion-icon> {{ \'Show QR code\' | translate }}</button>\n\n				</ion-item>\n\n				<ion-item>\n					<ngx-qrcode [qrc-value]="QRCode" (click)="saveQR()"></ngx-qrcode>\n\n					<p *ngIf="member.locality"><b>{{ \'Locality\' | translate }}:</b> {{ member.locality }}</p>\n					<p *ngIf="member.street_address"><b>{{ \'Address\' | translate }}:</b> {{ member.street_address }}</p>\n\n					<p class="description">{{ member.aboutme }}</p>\n\n				</ion-item>\n			</ion-col>\n		</ion-row>\n\n\n	</ion-card>\n</ion-content>\n<!-- <ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberDetail/memberDetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_MemberService__["a" /* MemberService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_9__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */]])
    ], MemberDetailPage);
    return MemberDetailPage;
}());

//# sourceMappingURL=memberDetail.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBasicAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth(http, settings) {
        this.http = http;
        this.settings = settings;
        this.AUTH_TOKEN_KEY = 'auth_token';
        this.loadToken();
    }
    HttpBasicAuth.prototype.loadToken = function () {
        var token = window.localStorage.getItem(this.AUTH_TOKEN_KEY);
        if (!token) {
            token = window.sessionStorage.getItem(this.AUTH_TOKEN_KEY);
        }
        if (token) {
            this.setToken(JSON.parse(token));
        }
    };
    HttpBasicAuth.prototype.storeToken = function (token, rememberMe) {
        if (rememberMe) {
            window.localStorage.setItem(this.AUTH_TOKEN_KEY, JSON.stringify(token));
        }
        else {
            window.sessionStorage.setItem(this.AUTH_TOKEN_KEY, JSON.stringify(token));
        }
        this.setToken(token);
    };
    HttpBasicAuth.prototype.destroyToken = function () {
        window.localStorage.removeItem(this.AUTH_TOKEN_KEY);
        window.sessionStorage.removeItem(this.AUTH_TOKEN_KEY);
    };
    HttpBasicAuth.prototype.setToken = function (token) {
        this.authorizationToken = token;
    };
    HttpBasicAuth.prototype.setAuthorizationToken = function (username, password, rememberMe) {
        this.authorizationToken = "Basic " + btoa(username + ":" + password);
        console.log('setAuthorizationToken', username, this.authorizationToken);
        this.storeToken(this.authorizationToken, rememberMe);
    };
    HttpBasicAuth.prototype.createAuthorizationHeader = function (headers) {
        if (this.authorizationToken) {
            headers.append('Authorization', this.authorizationToken);
            return true;
        }
        else {
            console.log("You are not authenticated.");
            return false;
        }
    };
    HttpBasicAuth.prototype.createAcceptHeader = function (headers) {
        headers.append('Accept', 'application/json');
    };
    HttpBasicAuth.prototype.extractData = function (response) {
        var body = response.json();
        // console.log(body)
        return body || {};
    };
    HttpBasicAuth.prototype.extractError = function (error) {
        console.log('http error', error);
        if (error.status == 401) {
            window.localStorage.removeItem('auth_token');
            window.sessionStorage.removeItem('auth_token');
            throw ('Your login details may be incorrect, please logout and login again');
        }
        try {
            if (error._body && !error._body.type) {
                var b = JSON.parse(error._body);
                if (b.error)
                    throw (b.error);
            }
            throw '';
        }
        catch (e) {
            throw ('There was a connection or server error!') + e;
        }
    };
    HttpBasicAuth.prototype.getWithAuth = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        // console.log('getWithAuth', url, headers);
        return this.get(url, headers);
    };
    HttpBasicAuth.prototype.get = function (url, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        console.log('get', url, headers);
        return this.http.get(url, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.getAutocomplete = function (resource, autocomplete, fragment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.get(this.settings.SERVER_URL + "/" + resource + "?" + autocomplete + fragment + "&limit=3", headers)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (item, key) {
                var newItem;
                if (typeof item !== 'object') {
                    newItem = {
                        value: item
                    };
                }
                else {
                    newItem = item;
                }
                if (!newItem.id) {
                    newItem.id = key;
                }
                return newItem;
            });
            return response;
        });
    };
    HttpBasicAuth.prototype.postWithAuth = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.post(url, data, headers);
    };
    HttpBasicAuth.prototype.post = function (url, data, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.putWithAuth = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.put(url, data, headers);
    };
    HttpBasicAuth.prototype.put = function (url, data, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.patchWithAuth = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.patch(url, data, headers);
    };
    HttpBasicAuth.prototype.patch = function (url, data, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        return this.http.patch(url, data, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.deleteWithAuth = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.delete(url, headers);
    };
    HttpBasicAuth.prototype.delete = function (url, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        return this.http.delete(url, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.options = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        this.createAcceptHeader(headers);
        console.log(headers);
        return this.http.options(url, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.logout = function () {
        this.destroyToken();
    };
    HttpBasicAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */]])
    ], HttpBasicAuth);
    return HttpBasicAuth;
}());

//# sourceMappingURL=HttpBasicAuth.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_MemberService__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from '../../services/AuthService';




var ContactMemberPage = /** @class */ (function () {
    function ContactMemberPage(viewCtrl, navParams, loadingCtrl, popoverCtrl, 
        // private authService: AuthService,
        memberService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.memberService = memberService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
    }
    ContactMemberPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoaded = false;
        if (this.navParams.data) {
            this.to_id = this.navParams.data.to_id;
            this.to_name = this.navParams.data.to_name;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.fields = {
                    'subject': {
                        'name': 'subject',
                        'placeholder': '',
                        'label': ('Subject'),
                        'required': true
                    },
                    'body': {
                        'name': 'body',
                        'placeholder': '',
                        'label': ('Message'),
                        'type': 'textarea'
                    }
                };
                _this.isLoaded = true;
            }
        });
    };
    ContactMemberPage.prototype.onChanged = function (options) {
        this.message_data = options.value;
        this.isValid = options.isValid;
    };
    ContactMemberPage.prototype.sendMessage = function () {
        var _this = this;
        console.log(this.fields);
        console.log(this.message_data);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.fields,
            operation: ('Contact Member')
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.memberService.contact(_this.to_id, _this.message_data).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: ('Message'),
                        status: ('was sent'),
                        options: []
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    ContactMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-member',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberContact/memberContact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Contact Member\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="sendMessage()">{{ \'Send\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberContact/memberContact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__services_MemberService__["a" /* MemberService */],
            __WEBPACK_IMPORTED_MODULE_2__services_AlertService__["a" /* AlertService */]])
    ], ContactMemberPage);
    return ContactMemberPage;
}());

//# sourceMappingURL=memberContact.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_WantService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addWant_addWant__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WantDetailPage = /** @class */ (function () {
    function WantDetailPage(params, viewCtrl, navCtrl, loadingCtrl, wantService, authService, popoverCtrl, alertService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.wantService = wantService;
        this.authService = authService;
        this.popoverCtrl = popoverCtrl;
        this.alertService = alertService;
    }
    WantDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.imageExpanded = false;
            _this.loader = _this.loadingCtrl.create({
                content: ('Please wait') + '...'
            });
            _this.loader.present();
            _this.authService.userInfo.subscribe(function (userInfo) {
                _this.currentUser = userInfo.id;
                _this.currentMember = userInfo;
                console.log(_this.currentMember);
            });
            _this.wantService.describe().subscribe(function (response) {
                _this.definitionWant = response;
                _this.wantService.get(_this.params.get('id')).subscribe(function (response) {
                    var _loop_1 = function (i) {
                        var field = _this.definitionWant.POST[i];
                        if (field.type === 'select') {
                            if (field.multiple) {
                                response["$" + i] = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["map"])(response[i], function (option) { return field.options[option]; }).join(', ');
                            }
                            else {
                                response["$" + i] = field.options[response[i]];
                            }
                        }
                    };
                    for (var i in _this.definitionWant.POST) {
                        _loop_1(i);
                    }
                    _this.want = response;
                    _this.loader.dismiss();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }, function (error) {
                _this.alertService.showError(error);
                _this.loader.dismiss();
            });
        });
    };
    WantDetailPage.prototype.showMember = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: userId
        });
    };
    WantDetailPage.prototype.expandImage = function () {
        this.imageExpanded = !this.imageExpanded;
    };
    WantDetailPage.prototype.editWant = function (want) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__addWant_addWant__["a" /* AddWantPage */], {
            want: want
        });
    };
    WantDetailPage.prototype.deleteWant = function (id) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionWant.POST,
            operation: ('Delete Want')
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteWantConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteWantConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.wantService.delete(id).subscribe(function (response) {
                    _this.loader.dismiss();
                    // this.initPage();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    WantDetailPage.prototype.customAction = function (label, href, confirm) {
        var _this = this;
        console.log(label, href, confirm);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            operation: label
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteWantConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteWantConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.wantService.custom(href).subscribe(function (response) {
                    _this.loader.dismiss();
                    // this.initPage();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    WantDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-want-detail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wantDetail/wantDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Need Details\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="app-item-details" *ngIf="want">\n    <h2 class="title">{{ want.title }}</h2>\n\n    <div class="description" [innerHTML]="want.description"></div>\n    <ion-row>\n      <ion-col col-6 (click)="showMember(want.user_id)">\n        <ion-item class="item-avatar">\n          <ion-avatar>\n            <img [src]="want.user_id_ref.portrait || \'assets/images/default_user.jpg\'">\n          </ion-avatar>\n					<p>\n						{{ want.user_id_ref.name }}\n					</p>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n					<p *ngIf="want.$category">{{ \'Category\' | translate }}: <b>{{ want.$category }}</b></p>\n          <p *ngIf="want.changed">{{ \'Posted\' | translate }}: <b>{{ want.changed }}</b></p>\n          <p *ngIf="want.expires">{{ \'Expires\' | translate }}: <b>{{ want.expires }}</b></p>\n\n          <ng-container *ngIf="currentUser == want.user_id">\n            <button class="my-actions edit" ion-button (click)="editWant(want)" >{{ \'Edit\' | translate }}</button>\n            <button class="my-actions delete" ion-button (click)="deleteWant(want.id)" >{{ \'Delete\' | translate }}</button>\n          </ng-container>\n\n          <ng-container *ngFor="let link of want._links">\n            <button *ngIf="link.rel !=\'self\'" class="my-actions edit" ion-button (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n          </ng-container>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<!-- <ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wantDetail/wantDetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_WantService__["a" /* WantService */],
            __WEBPACK_IMPORTED_MODULE_6__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], WantDetailPage);
    return WantDetailPage;
}());

//# sourceMappingURL=wantDetail.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordsFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeywordsFilterPage = /** @class */ (function () {
    function KeywordsFilterPage(viewCtrl, formBuilder, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formErrors = {
            'keywords': ''
        };
        this.validationMessages = {
            'keywords': {
                'required': ('Email is required')
            }
        };
    }
    KeywordsFilterPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.title = this.navParams.data.title;
            this.page = this.navParams.data.page;
        }
        this.buildForm();
    };
    KeywordsFilterPage.prototype.buildForm = function () {
        var _this = this;
        this.keywordsForm = this.formBuilder.group({
            'keywords': [this.keywords, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.keywordsForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    KeywordsFilterPage.prototype.onValueChanged = function (data) {
        if (!this.keywordsForm) {
            return;
        }
        var form = this.keywordsForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    KeywordsFilterPage.prototype.setFilter = function () {
        this.keywords = this.keywordsForm.value.keywords;
        // this.viewCtrl.dismiss();
        this.navCtrl.popToRoot();
        this.navCtrl.push(this.page, {
            filter: "&fragment=" + this.keywords,
            filterName: "'" + this.keywords + "'"
        });
    };
    KeywordsFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-keywords',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/keywords/keywords.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ title || translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<form class="app-form" [formGroup]="keywordsForm">\n		<ion-list>\n	  	<ion-item>\n	  		<ion-input type="text" placeholder="{{ \'Keyword\' | translate }}" formControlName="keywords"></ion-input>\n	  	</ion-item>\n	  </ion-list>\n	  <button class="confirm-button" ion-button full [disabled]="!keywordsForm.valid" (click)="setFilter()">{{ \'Search\' | translate }}</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/keywords/keywords.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], KeywordsFilterPage);
    return KeywordsFilterPage;
}());

//# sourceMappingURL=keywords.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionDetailPage = /** @class */ (function () {
    function TransactionDetailPage(params, navCtrl, menuCtrl, 
        // private modalCtrl: ModalController,
        authService, transactionService, loadingCtrl, popoverCtrl, alertService) {
        var _this = this;
        this.params = params;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.transactionService = transactionService;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertService = alertService;
        this.canPost = false;
        this.menuCtrl.enable(true, 'app-menu');
        this.authService.userInfo.subscribe(function (userInfo) {
            _this.username = userInfo.name;
        });
    }
    TransactionDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionService.describe()
            .subscribe(function (response) {
            _this.definitionTransaction = response;
            _this.canPost = !!_this.definitionTransaction.POST;
        }, function (error) { return _this.alertService.showError('Connection problem!'); });
        this.loadTransaction(this.params.get('id'));
    };
    TransactionDetailPage.prototype.loadTransaction = function (id) {
        var _this = this;
        this.transactionService.get(id)
            .subscribe(function (response) { return _this.transaction = response; }, function (error) { return _this.alertService.showError('Connection problem!'); });
    };
    TransactionDetailPage.prototype.showMember = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: id
        });
    };
    TransactionDetailPage.prototype.customAction = function (label, href, confirm) {
        var _this = this;
        console.log(label, href, confirm);
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            operation: label
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteOfferConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteOfferConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.transactionService.custom(href).subscribe(function (response) {
                    _this.ngOnInit();
                    _this.loader.dismiss();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    TransactionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction-detail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactionDetail/transactionDetail.html"*/'<ion-header>\n  <ion-navbar>\n		<ion-title>{{ \'Transaction\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="ui success message" *ngIf="success">\n    <i class="close icon"></i>\n    <div class="header">{{ \'Success!\' | translate }}</div>\n    <p>{{ \'New transaction created\' | translate }}.</p>\n  </div>\n\n  <ion-card *ngIf="transaction">\n    <ion-card-content>\n      <p> {{ transaction.description }} </p>\n      <p> <span [innerHTML]="transaction.amount"></span> </p>\n			<p *ngIf="transaction.created">{{ transaction.created }}</p>\n      <p>from\n        <button ion-button small class="button-normal" (click)="showMember(transaction.payer_ref.id)">{{ transaction.payer_ref.name }}</button>\n      <p>to\n        <button ion-button small class="button-normal" (click)="showMember(transaction.payee_ref.id)">{{ transaction.payee_ref.name }}</button>\n      </p>\n\n      <ng-container *ngFor="let link of transaction._links">\n        <button *ngIf="link.rel !=\'self\' && link.rel !=\'view\'" class="edit" ion-button small (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n      </ng-container>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactionDetail/transactionDetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__["a" /* TransactionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], TransactionDetailPage);
    return TransactionDetailPage;
}());

//# sourceMappingURL=transactionDetail.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MemberService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_filtersBuilder_filtersBuilder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wants_wants__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_offers_offers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_memberDetail_memberDetail__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProfilePage = /** @class */ (function () {
    function ProfilePage(viewCtrl, loadingCtrl, popoverCtrl, authService, memberService, alertService) {
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.memberService = memberService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoaded = false;
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.authService.userInfo.subscribe(function (userInfo) {
                    _this.user = userInfo;
                    _this.memberService.describe(_this.user).subscribe(function (response) {
                        _this.isLoaded = true;
                        _this.definitionMember = response;
                        for (var i in _this.user) {
                            if (_this.user[i] && _this.definitionMember.PATCH[i]) {
                                _this.definitionMember.PATCH[i].default = _this.user[i];
                            }
                        }
                        _this.fields = _this.definitionMember.PATCH;
                        _this.loader.dismiss();
                    }, function (error) {
                        //console.log(error);
                        _this.alertService.showError(error);
                        _this.loader.dismiss();
                    });
                });
            }
        });
    };
    ProfilePage.prototype.onChanged = function (options) {
        this.member = options.value;
        this.isValid = options.isValid;
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionMember.PATCH,
            operation: ('My Account')
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.member.id = _this.user.id;
                _this.memberService.patch(_this.member).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.authService.getUserInfo(_this.member.name, true);
                    // this.user = this.member; // dirty way to save the new user details locally
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: ('Member'),
                        options: [{
                                title: ('View my profile'),
                                icon: 'person',
                                page: __WEBPACK_IMPORTED_MODULE_11__pages_memberDetail_memberDetail__["a" /* MemberDetailPage */],
                                params: {
                                    id: _this.member.id
                                },
                            }]
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    ProfilePage.prototype.showActions = function () {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */], {
            options: [{
                    title: ('Show My Offers'),
                    page: __WEBPACK_IMPORTED_MODULE_9__pages_offers_offers__["a" /* OffersPage */],
                    params: {
                        filter: "&user_id=" + this.user.id,
                        filterName: this.user.name,
                        myActions: true
                    }
                }, {
                    title: ('Show My Needs'),
                    page: __WEBPACK_IMPORTED_MODULE_8__pages_wants_wants__["a" /* WantsPage */],
                    params: {
                        filter: "&user_id=" + this.user.id,
                        filterName: this.user.name,
                        myActions: true
                    }
                }, {
                    title: ('Show My Transactions'),
                    page: __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__["a" /* TransactionsPage */],
                    params: {
                        filter: "&user_id=" + this.user.id,
                        filterName: this.user.name,
                        myActions: true
                    }
                }
            ]
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/userProfile/userProfile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'My Account\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list class="home-header">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="user && user.image || user && user.portrait || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n      <h2>{{ user && user.name }}</h2>\n      <ion-item class="balance">\n  			<ion-avatar item-start>\n        	<ion-icon name="trending-up"></ion-icon>\n      	</ion-avatar>\n  			<p [innerHTML]="user && user.balance"></p>\n  		</ion-item>\n    </ion-item>\n\n  </ion-list>\n\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n\n</ion-content>\n\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="editProfile()">{{ \'Save\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/userProfile/userProfile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_MemberService__["a" /* MemberService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=userProfile.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuOptionPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuOptionPopover = /** @class */ (function () {
    function MenuOptionPopover(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuOptionPopover.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-backdrop').css('background', 'none');
        if (this.navParams.data) {
            this.options = this.navParams.data.options;
        }
    };
    MenuOptionPopover.prototype.goToPage = function (option) {
        var page = option.page;
        if (page) {
            this.navCtrl.push(page, option.params);
            this.viewCtrl.dismiss();
        }
    };
    MenuOptionPopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popover-menu-option',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/menu-option.html"*/'<ion-list class="options-popover">\n  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n    <ion-label>{{ option.title | translate }}</ion-label>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/menu-option.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MenuOptionPopover);
    return MenuOptionPopover;
}());

//# sourceMappingURL=menu-option.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreActionsBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../../pages/home/home';
var MoreActionsBuilderComponent = /** @class */ (function () {
    function MoreActionsBuilderComponent(viewCtrl, 
        // private navCtrl: NavController,
        navParams, authService, appCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.appCtrl = appCtrl;
    }
    MoreActionsBuilderComponent.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.options = this.navParams.data.options;
            this.operation = this.navParams.data.operation;
            this.status = this.navParams.data.status || 'was saved';
        }
    };
    MoreActionsBuilderComponent.prototype.goToPage = function (option) {
        var page = option.page;
        if (page) {
            this.viewCtrl.dismiss();
            this.appCtrl.getRootNav().push(page, option.params);
            // this.navCtrl.popToRoot();
            // this.navCtrl.push(page, option.params);
        }
    };
    MoreActionsBuilderComponent.prototype.goBack = function () {
        this.viewCtrl.dismiss();
        // this.navCtrl.pop();
        // this.navCtrl.remove(2,1);
        this.appCtrl.getRootNav().pop();
    };
    MoreActionsBuilderComponent.prototype.goToHome = function () {
        this.viewCtrl.dismiss();
        // this.navCtrl.setRoot(HomePage);
        // this.navCtrl.push(HomePage);
        this.appCtrl.getRootNav().popToRoot();
    };
    MoreActionsBuilderComponent.prototype.doLogout = function () {
        var _this = this;
        this.authService.doLogout().subscribe(function (response) {
            _this.viewCtrl.dismiss();
            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
        });
    };
    MoreActionsBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'more-actions-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/moreActionsBuilder/moreActionsBuilder.html"*/'<div class="app-confirm-operation">\n	<h6>{{ operation | translate }} {{ status | translate }}</h6>\n	<ion-list>\n	  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n	  	<i [class]="option.icon" item-start></i>\n	    <ion-label>{{ option.title | translate }}</ion-label>\n	  </ion-item>\n	  <ion-item (click)="goBack()">\n	  	<i class="ion-back" item-start></i>\n	    <ion-label>{{ \'Go Back\' | translate }}</ion-label>\n	  </ion-item>\n		<ion-item (click)="goToHome()">\n	  	<i class="ion-home" item-start></i>\n	    <ion-label>{{ \'Go Home\' | translate }}</ion-label>\n	  </ion-item>\n	</ion-list>\n</div>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/moreActionsBuilder/moreActionsBuilder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MoreActionsBuilderComponent);
    return MoreActionsBuilderComponent;
}());

//# sourceMappingURL=moreActionsBuilder.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ConfigService__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_TransactionService__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_OfferService__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_WantService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_MemberService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_formBuilder_formBuilder__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_fieldBuilder_fieldBuilder__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_filtersBuilder_filtersBuilder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_menu_option__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_addTransaction_addTransaction__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactions__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_transactionDetail_transactionDetail__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_offers_offers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_offerDetail_offerDetail__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_addOffer_addOffer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_wants_wants__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_wantDetail_wantDetail__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_addWant_addWant__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_categories_categories__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_keywords_keywords__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_UnixTimeToMoment__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_ObjectKeys__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_members_members__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_userProfile_userProfile__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_memberContact_memberContact__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_keyboard__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_app_version__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ngx_qrcode3__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_qr_scanner__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_base64_to_gallery__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_common_http__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ngx_translate_core__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ngx_translate_http_loader__ = __webpack_require__(533);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































 // ionic v3











function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_50__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
// import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';
// export class MyMissingTranslationHandler implements MissingTranslationHandler {
//     handle(params: MissingTranslationHandlerParams) {
// 				// console.log('MyMissingTranslationHandler',params)
// 				// if(params && params.key) return params.key;
// 				return '! MISSING TRANSLATION !';
//     }
// }

Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])(); // workaround for error "Expression has changed after it was checked"
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* LetsApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_menu_option__["a" /* MenuOptionPopover */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_transactionDetail_transactionDetail__["a" /* TransactionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_offerDetail_offerDetail__["a" /* OfferDetailPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_addOffer_addOffer__["a" /* AddOfferPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_wants_wants__["a" /* WantsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_wantDetail_wantDetail__["a" /* WantDetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_addWant_addWant__["a" /* AddWantPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_categories_categories__["a" /* CategoriesFilterPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_keywords_keywords__["a" /* KeywordsFilterPage */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_UnixTimeToMoment__["a" /* UnixTimeToMoment */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_ObjectKeys__["a" /* ObjectKeys */],
                __WEBPACK_IMPORTED_MODULE_35__pages_members_members__["a" /* MembersPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_memberDetail_memberDetail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_formBuilder_formBuilder__["a" /* FormBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_fieldBuilder_fieldBuilder__["a" /* FieldBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_userProfile_userProfile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_memberContact_memberContact__["a" /* ContactMemberPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* LetsApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_48__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_45_ngx_qrcode3__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_49__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_49__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_48__angular_common_http__["a" /* HttpClient */]]
                    },
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* LetsApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_menu_option__["a" /* MenuOptionPopover */],
                __WEBPACK_IMPORTED_MODULE_16__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_transactionDetail_transactionDetail__["a" /* TransactionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_offerDetail_offerDetail__["a" /* OfferDetailPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_addOffer_addOffer__["a" /* AddOfferPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_wants_wants__["a" /* WantsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_wantDetail_wantDetail__["a" /* WantDetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_addWant_addWant__["a" /* AddWantPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_categories_categories__["a" /* CategoriesFilterPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_keywords_keywords__["a" /* KeywordsFilterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_members_members__["a" /* MembersPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_memberDetail_memberDetail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_userProfile_userProfile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_memberContact_memberContact__["a" /* ContactMemberPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */],
                __WEBPACK_IMPORTED_MODULE_6__services_AuthService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__services_ConfigService__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_8__services_TransactionService__["a" /* TransactionService */],
                __WEBPACK_IMPORTED_MODULE_9__services_OfferService__["a" /* OfferService */],
                __WEBPACK_IMPORTED_MODULE_10__services_WantService__["a" /* WantService */],
                __WEBPACK_IMPORTED_MODULE_11__services_AlertService__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_13__services_HttpBasicAuth__["a" /* HttpBasicAuth */],
                __WEBPACK_IMPORTED_MODULE_12__services_MemberService__["a" /* MemberService */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 248,
	"./af.js": 248,
	"./ar": 249,
	"./ar-dz": 250,
	"./ar-dz.js": 250,
	"./ar-ly": 251,
	"./ar-ly.js": 251,
	"./ar-ma": 252,
	"./ar-ma.js": 252,
	"./ar-sa": 253,
	"./ar-sa.js": 253,
	"./ar-tn": 254,
	"./ar-tn.js": 254,
	"./ar.js": 249,
	"./az": 255,
	"./az.js": 255,
	"./be": 256,
	"./be.js": 256,
	"./bg": 257,
	"./bg.js": 257,
	"./bn": 258,
	"./bn.js": 258,
	"./bo": 259,
	"./bo.js": 259,
	"./br": 260,
	"./br.js": 260,
	"./bs": 261,
	"./bs.js": 261,
	"./ca": 262,
	"./ca.js": 262,
	"./cs": 263,
	"./cs.js": 263,
	"./cv": 264,
	"./cv.js": 264,
	"./cy": 265,
	"./cy.js": 265,
	"./da": 266,
	"./da.js": 266,
	"./de": 267,
	"./de-at": 268,
	"./de-at.js": 268,
	"./de.js": 267,
	"./dv": 269,
	"./dv.js": 269,
	"./el": 270,
	"./el.js": 270,
	"./en-au": 271,
	"./en-au.js": 271,
	"./en-ca": 272,
	"./en-ca.js": 272,
	"./en-gb": 273,
	"./en-gb.js": 273,
	"./en-ie": 274,
	"./en-ie.js": 274,
	"./en-nz": 275,
	"./en-nz.js": 275,
	"./eo": 276,
	"./eo.js": 276,
	"./es": 277,
	"./es-do": 278,
	"./es-do.js": 278,
	"./es.js": 277,
	"./et": 279,
	"./et.js": 279,
	"./eu": 280,
	"./eu.js": 280,
	"./fa": 281,
	"./fa.js": 281,
	"./fi": 282,
	"./fi.js": 282,
	"./fo": 283,
	"./fo.js": 283,
	"./fr": 284,
	"./fr-ca": 285,
	"./fr-ca.js": 285,
	"./fr-ch": 286,
	"./fr-ch.js": 286,
	"./fr.js": 284,
	"./fy": 287,
	"./fy.js": 287,
	"./gd": 288,
	"./gd.js": 288,
	"./gl": 289,
	"./gl.js": 289,
	"./he": 290,
	"./he.js": 290,
	"./hi": 291,
	"./hi.js": 291,
	"./hr": 292,
	"./hr.js": 292,
	"./hu": 293,
	"./hu.js": 293,
	"./hy-am": 294,
	"./hy-am.js": 294,
	"./id": 295,
	"./id.js": 295,
	"./is": 296,
	"./is.js": 296,
	"./it": 297,
	"./it.js": 297,
	"./ja": 298,
	"./ja.js": 298,
	"./jv": 299,
	"./jv.js": 299,
	"./ka": 300,
	"./ka.js": 300,
	"./kk": 301,
	"./kk.js": 301,
	"./km": 302,
	"./km.js": 302,
	"./ko": 303,
	"./ko.js": 303,
	"./ky": 304,
	"./ky.js": 304,
	"./lb": 305,
	"./lb.js": 305,
	"./lo": 306,
	"./lo.js": 306,
	"./lt": 307,
	"./lt.js": 307,
	"./lv": 308,
	"./lv.js": 308,
	"./me": 309,
	"./me.js": 309,
	"./mi": 310,
	"./mi.js": 310,
	"./mk": 311,
	"./mk.js": 311,
	"./ml": 312,
	"./ml.js": 312,
	"./mr": 313,
	"./mr.js": 313,
	"./ms": 314,
	"./ms-my": 315,
	"./ms-my.js": 315,
	"./ms.js": 314,
	"./my": 316,
	"./my.js": 316,
	"./nb": 317,
	"./nb.js": 317,
	"./ne": 318,
	"./ne.js": 318,
	"./nl": 319,
	"./nl-be": 320,
	"./nl-be.js": 320,
	"./nl.js": 319,
	"./nn": 321,
	"./nn.js": 321,
	"./pa-in": 322,
	"./pa-in.js": 322,
	"./pl": 323,
	"./pl.js": 323,
	"./pt": 324,
	"./pt-br": 325,
	"./pt-br.js": 325,
	"./pt.js": 324,
	"./ro": 326,
	"./ro.js": 326,
	"./ru": 327,
	"./ru.js": 327,
	"./se": 328,
	"./se.js": 328,
	"./si": 329,
	"./si.js": 329,
	"./sk": 330,
	"./sk.js": 330,
	"./sl": 331,
	"./sl.js": 331,
	"./sq": 332,
	"./sq.js": 332,
	"./sr": 333,
	"./sr-cyrl": 334,
	"./sr-cyrl.js": 334,
	"./sr.js": 333,
	"./ss": 335,
	"./ss.js": 335,
	"./sv": 336,
	"./sv.js": 336,
	"./sw": 337,
	"./sw.js": 337,
	"./ta": 338,
	"./ta.js": 338,
	"./te": 339,
	"./te.js": 339,
	"./tet": 340,
	"./tet.js": 340,
	"./th": 341,
	"./th.js": 341,
	"./tl-ph": 342,
	"./tl-ph.js": 342,
	"./tlh": 343,
	"./tlh.js": 343,
	"./tr": 344,
	"./tr.js": 344,
	"./tzl": 345,
	"./tzl.js": 345,
	"./tzm": 346,
	"./tzm-latn": 347,
	"./tzm-latn.js": 347,
	"./tzm.js": 346,
	"./uk": 348,
	"./uk.js": 348,
	"./uz": 349,
	"./uz.js": 349,
	"./vi": 350,
	"./vi.js": 350,
	"./x-pseudo": 351,
	"./x-pseudo.js": 351,
	"./yo": 352,
	"./yo.js": 352,
	"./zh-cn": 353,
	"./zh-cn.js": 353,
	"./zh-hk": 354,
	"./zh-hk.js": 354,
	"./zh-tw": 355,
	"./zh-tw.js": 355
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 450;

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetsApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators_ts__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LetsApp = /** @class */ (function () {
    function LetsApp(platform, statusBar, splashScreen, authService) {
        this.platform = platform;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.isDesktop = false;
        this.authService.loadToken();
        if (this.authService.isAuthenticated()) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        this.initializeApp(statusBar, splashScreen);
        if (platform.is('core') || platform.is('browser')) {
            // This will only print when on desktop
            console.log("Running on a desktop!");
            this.isDesktop = true;
        }
    }
    LetsApp.prototype.initializeApp = function (statusBar, splashScreen) {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //splashScreen.hide();
        });
    };
    LetsApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/app/app.html"*/'<ion-nav [ngClass]="{\'ionic-desktop-container\': isDesktop }" [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__services_AuthService__["a" /* AuthService */]])
    ], LetsApp);
    return LetsApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.
// Statics

// Operators






//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent() {
        this.isValid = false;
        this.formValue = {};
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormBuilderComponent.prototype.onValueChanged = function (field) {
        this.formValue[field.name] = field.value;
        this.fields[field.name].valid = field.valid;
        this.validateForm();
        this.changed.emit({ value: this.formValue, isValid: this.isValid });
    };
    FormBuilderComponent.prototype.validateForm = function () {
        var isValid = true;
        Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"])(this.fields, function (field) { return isValid = isValid && field.valid; });
        this.isValid = isValid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormBuilderComponent.prototype, "fields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FormBuilderComponent.prototype, "changed", void 0);
    FormBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/formBuilder/formBuilder.html"*/'<form class="app-form">\n	<ion-list>\n  	<field-builder-component *ngFor="let field of fields | keys" [field]="field" (changed)="onValueChanged($event)"></field-builder-component>\n  </ion-list>\n</form>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/formBuilder/formBuilder.html"*/
        })
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());

//# sourceMappingURL=formBuilder.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AppSettings } from '../../app/app.settings';





var FieldBuilderComponent = /** @class */ (function () {
    function FieldBuilderComponent(loadingCtrl, 
        // private settings: AppSettings,
        httpBasicAuth, formBuilder, alertService, camera) {
        this.loadingCtrl = loadingCtrl;
        this.httpBasicAuth = httpBasicAuth;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.camera = camera;
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validationMessages = {};
        this.formValue = {};
    }
    FieldBuilderComponent.prototype.ngOnInit = function () {
        this.hasSelectedOption = false;
        this.loader = this.loadingCtrl.create({
            content: ('Please wait') + '...'
        });
        this.buildForm();
    };
    FieldBuilderComponent.prototype.buildForm = function () {
        var _this = this;
        var formFields = {};
        var validations = [];
        this.field.$placeholder = this.field.placeholder || this.field.label + (this.field.required === true ? ' (*)' : '');
        this.field.type = this.field.type || 'textfield';
        switch (this.field.type) {
            case 'date':
                if (this.field.min) {
                    var minDate = this.parseDate(this.field.min);
                    this.field.parsedMin = __WEBPACK_IMPORTED_MODULE_6_moment__(minDate).format('YYYY-MM-DD');
                }
                if (this.field.max) {
                    var maxDate = this.parseDate(this.field.max);
                    this.field.parsedMax = __WEBPACK_IMPORTED_MODULE_6_moment__(maxDate).format('YYYY-MM-DD');
                }
                var defaultValue = this.parseDate(this.field.default || this.field.min || 'today');
                this.field.default = __WEBPACK_IMPORTED_MODULE_6_moment__(defaultValue).unix();
                formFields["$date" + this.field.name] = [__WEBPACK_IMPORTED_MODULE_6_moment__(defaultValue).format('YYYY-MM-DD')];
                break;
            case 'image':
                if (this.field.default) {
                    this.field.imgSrc = this.field.default;
                }
                break;
        }
        if (typeof this.field.type === 'object') {
            Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"])(this.field.type, function (childField) { return childField.label = _this.field.$placeholder; });
        }
        var initValue;
        if (this.field.default) {
            initValue = this.field.default;
        }
        else {
            initValue = this[this.field.name];
        }
        if (this.field.disabled) {
            validations.push({
                value: initValue,
                disabled: true
            });
        }
        else {
            validations.push(initValue);
        }
        if (this.field.required === true) {
            validations.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
            this.validationMessages.required = this.field.label + " is required.";
        }
        formFields[this.field.name] = validations;
        this.fieldForm = this.formBuilder.group(formFields);
        this.fieldForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    FieldBuilderComponent.prototype.onValueChanged = function (data) {
        var _this = this;
        if (!this.fieldForm) {
            return;
        }
        var form = this.fieldForm;
        // clear previous error message (if any)
        this.field.errors = '';
        var control = form.get(this.field.name);
        if (control && control.dirty && !control.valid) {
            var messages = this.validationMessages;
            for (var key in control.errors) {
                this.field.errors += messages[key] + ' ';
            }
        }
        if (this.fieldForm.value[this.field.name]) {
            switch (this.field.type) {
                case 'select':
                    if (this.field.multiple) {
                        this.field.$value = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["map"])(this.fieldForm.value[this.field.name], function (option) { return _this.field.options[option]; }).join(', ');
                    }
                    else {
                        this.field.$value = this.field.options[this.fieldForm.value[this.field.name]];
                    }
                    break;
                case 'date':
                    this.field.$value = __WEBPACK_IMPORTED_MODULE_6_moment__(this.parseDate(this.fieldForm.value[this.field.name])).format('MMM DD, YYYY');
                    break;
                default:
                    this.field.$value = this.fieldForm.value[this.field.name];
            }
        }
        if (data && this.field.type === 'textfield' && this.field.autocomplete) {
            this.autocompleteSearch(this.fieldForm.value[this.field.name]);
        }
        this.changed.emit({
            name: this.field.name,
            valid: this.fieldForm.valid || this.fieldForm.value[this.field.name],
            value: this.fieldForm.value[this.field.name]
        });
    };
    FieldBuilderComponent.prototype.parseDate = function (date) {
        var parsedDate;
        if (typeof date === 'number') {
            parsedDate = __WEBPACK_IMPORTED_MODULE_6_moment__(date * 1000);
        }
        else if (date) {
            var tokens = date.split(':');
            // console.log(date, tokens);
            while (tokens.length) {
                switch (tokens.shift()) {
                    case 'today':
                        // console.log('today');
                        parsedDate = __WEBPACK_IMPORTED_MODULE_6_moment__();
                        break;
                    case 'add':
                        // console.log('add');
                        if (!parsedDate) {
                            parsedDate = __WEBPACK_IMPORTED_MODULE_6_moment__();
                        }
                        // console.log(parsedDate, tokens.shift(), tokens.shift());
                        parsedDate.add(tokens.shift(), tokens.shift());
                        break;
                }
            }
        }
        // console.log(date, parsedDate);
        if (parsedDate)
            return parsedDate.toDate();
    };
    FieldBuilderComponent.prototype.addImage = function () {
        this.addImageToField(this.camera.PictureSourceType.PHOTOLIBRARY); // PHOTOLIBRARY
    };
    FieldBuilderComponent.prototype.takePhoto = function () {
        this.addImageToField(this.camera.PictureSourceType.CAMERA); // CAMERA
    };
    FieldBuilderComponent.prototype.addImageToField = function (sourceType) {
        var _this = this;
        this.loader.present();
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        };
        this.camera.getPicture(options).then(function (image) {
            _this.field.imgSrc = "data:image/jpeg;base64," + image;
            var fieldValue = {};
            fieldValue[_this.field.name] = _this.field.imgSrc;
            _this.fieldForm.setValue(fieldValue);
            _this.loader.dismiss();
        }, function (err) { return _this.loader.dismiss(); });
    };
    FieldBuilderComponent.prototype.autocompleteSearch = function (value) {
        var _this = this;
        if (!value) {
            this.field.$options = [];
            return;
        }
        if (this.hasSelectedOption) {
            this.hasSelectedOption = false;
            return;
        }
        this.httpBasicAuth.getAutocomplete(this.field.resource, this.field.autocomplete, value).subscribe(function (response) { return _this.field.$options = response; }, function (error) { return _this.alertService.showError(error); });
    };
    FieldBuilderComponent.prototype.selectOption = function (option) {
        var fieldValue = {};
        fieldValue[this.field.name] = option.value || option.name;
        console.log(option, this.field, fieldValue);
        this.hasSelectedOption = true;
        this.fieldForm.setValue(fieldValue);
        this.field.$options = [];
    };
    FieldBuilderComponent.prototype.childFieldChange = function (childField) {
        this.formValue[childField.name] = childField.value;
        this.field.type[childField.name].valid = childField.valid;
        var formValue = [];
        Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"])(this.formValue, function (value) { return formValue.push(value); });
        var fieldValue = {};
        fieldValue[this.field.name] = formValue;
        this.fieldForm.setValue(fieldValue);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FieldBuilderComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FieldBuilderComponent.prototype, "changed", void 0);
    FieldBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'field-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/fieldBuilder/fieldBuilder.html"*/'<ion-item [formGroup]="fieldForm" [ngSwitch]="field.type">\n\n  <ion-label *ngIf="field.placeholder">{{ field.label }}</ion-label>\n\n	<ion-textarea *ngSwitchCase="\'textarea\'" [placeholder]="field.$placeholder" [required]="field.required === true" [formControlName]="field.name" [attr.rows]="field.lines || 4"></ion-textarea>\n\n	<input *ngSwitchCase="\'date\'" type="hidden" [required]="field.required === true" [formControlName]="field.name">\n	<ion-datetime *ngSwitchCase="\'date\'" [required]="field.required === true" [min]="field.parsedMin" [max]="field.parsedMax" [formControlName]="\'$date\' + field.name"></ion-datetime>\n\n	<ion-select *ngSwitchCase="\'select\'" [placeholder]="field.$placeholder" [required]="field.required === true" [formControlName]="field.name" [multiple]="field.multiple" interface="popover">\n    <ion-option [value]="option.name" *ngFor="let option of field.options | keys">{{ option }}</ion-option>\n  </ion-select>\n\n	<input *ngSwitchCase="\'image\'" type="hidden" [required]="field.required === true" [formControlName]="field.name">\n	<div *ngSwitchCase="\'image\'">\n		<div class="image" *ngIf="field.imgSrc">\n			<img [src]="field.imgSrc">\n		</div>\n	</div>\n	<button *ngSwitchCase="\'image\'" ion-button full (click)="addImage()"><i class="image icon"></i>{{ \'Add Image\' | translate }}</button>\n	<button *ngSwitchCase="\'image\'" ion-button full (click)="takePhoto()"><i class="photo icon"></i>{{ \'Take Photo\' | translate }}</button>\n\n	<ion-input *ngSwitchCase="\'textfield\'" type="text" [placeholder]="field.$placeholder" [required]="field.required === true" [formControlName]="field.name"></ion-input>\n\n	<ion-input *ngSwitchCase="\'number\'" type="number" [placeholder]="field.$placeholder" [required]="field.required === true" [formControlName]="field.name" [min]="field.min" [max]="field.max"></ion-input>\n\n	<ion-row *ngSwitchDefault>\n		<ion-col *ngFor="let childfield of field.type | keys">\n			<field-builder-component [field]="childfield" (changed)="childFieldChange($event)"></field-builder-component>\n		</ion-col>\n	</ion-row>\n\n</ion-item>\n\n<ion-list class="app-items mini" *ngIf="field.$options">\n  <ion-item *ngFor="let option of field.$options" (click)="selectOption(option)">\n  	<!-- <ion-avatar item-start *ngIf="option.portrait || option.image">\n      <img [src]="option.portrait || option.image">\n    </ion-avatar> -->\n    <h6>{{ option.value || option.name }}</h6>\n  </ion-item>\n</ion-list>\n\n<ion-item class="form-error" *ngIf="field.errors">\n  <p>{{ field.errors }}</p>\n</ion-item>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/fieldBuilder/fieldBuilder.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_HttpBasicAuth__["a" /* HttpBasicAuth */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]])
    ], FieldBuilderComponent);
    return FieldBuilderComponent;
}());

//# sourceMappingURL=fieldBuilder.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as _ from 'lodash';
var CategoriesFilterPage = /** @class */ (function () {
    // _: any = _;
    function CategoriesFilterPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoriesFilterPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.categories = this.navParams.data.categories;
            this.title = this.navParams.data.title;
            this.page = this.navParams.data.page;
        }
    };
    CategoriesFilterPage.prototype.setFilter = function (category) {
        // this.viewCtrl.dismiss();
        console.log(category);
        this.navCtrl.popToRoot();
        this.navCtrl.push(this.page, {
            filter: "&category=" + category.id,
            filterName: category.name
        });
    };
    CategoriesFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/categories/categories.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{ title | translate }}</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-list class="app-items">\n		<ion-item *ngFor="let category of categories" (click)="setFilter(category)">\n			<h5>{{ category.name }}</h5>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CategoriesFilterPage);
    return CategoriesFilterPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnixTimeToMoment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UnixTimeToMoment = /** @class */ (function () {
    function UnixTimeToMoment() {
    }
    UnixTimeToMoment.prototype.transform = function (unixTime) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(parseInt(unixTime + "000")).format('DD/MM/YYYY');
    };
    UnixTimeToMoment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'unixTimeToMoment' })
    ], UnixTimeToMoment);
    return UnixTimeToMoment;
}());

//# sourceMappingURL=UnixTimeToMoment.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectKeys; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ObjectKeys = /** @class */ (function () {
    function ObjectKeys() {
    }
    ObjectKeys.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])(value[key], {
                name: key
            }));
        }
        return keys;
    };
    ObjectKeys = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
    ], ObjectKeys);
    return ObjectKeys;
}());

//# sourceMappingURL=ObjectKeys.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_OfferService__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offerDetail_offerDetail__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addOffer_addOffer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_members_members__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { KeywordsFilterPage } from '../keywords/keywords';
// import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';





var OffersPage = /** @class */ (function () {
    function OffersPage(viewCtrl, navCtrl, navParams, loadingCtrl, popoverCtrl, offerService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.offerService = offerService;
        this.alertService = alertService;
        this.canPost = false;
    }
    OffersPage_1 = OffersPage;
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
            this.myActions = this.navParams.data.myActions;
            this.currentUser = this.navParams.data.currentUser;
            this.is_filtered = this.navParams.data.is_filtered;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (_this.deleteOfferConfirmDialog) {
                return;
            }
            _this.initPage();
        });
    };
    OffersPage.prototype.initPage = function () {
        var _this = this;
        this.page = 1;
        this.hasNoMoreData = false;
        this.isLoading = false;
        this.offers = [];
        this.offerService.describe().subscribe(function (response) {
            _this.definitionOffer = response;
            _this.canPost = !!_this.definitionOffer.POST;
            // if (this.canPost) {
            // 	$('page-offers ion-content.content').children().css('margin-bottom', '45px');
            // }
            _this.categories = Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["map"])(_this.definitionOffer.POST.category.options, function (category, key) {
                return { id: key, title: category };
            });
        }, function (error) { return _this.alertService.showError(error); });
        this.loadOffers(true);
    };
    OffersPage.prototype.setPagination = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_jquery__('page-offers .scroll-content').on('scroll', function (ev) {
            if (_this.hasNoMoreData || _this.isLoading) {
                return;
            }
            if ((ev.target.scrollHeight - ev.target.scrollTop) < 800) {
                _this.loadOffers();
            }
        });
    };
    OffersPage.prototype.loadOffers = function (from_scratch) {
        var _this = this;
        if (this.hasNoMoreData || this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.loader = this.loadingCtrl.create({
            content: ('Please wait') + '...'
        });
        this.loader.present();
        this.offerService.list(this.page, this.filter).subscribe(function (response) {
            if (from_scratch)
                _this.offers = [];
            if (!_this.filterName)
                _this.filterName = 'Recent Offers';
            if (!response.length) {
                _this.hasNoMoreData = true;
                _this.noResults = true;
            }
            else {
                _this.noResults = false;
            }
            _this.offers = _this.offers.concat(response);
            _this.page++;
            _this.loader.dismiss();
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.showError(error);
            _this.loader.dismiss();
            _this.isLoading = false;
        });
    };
    OffersPage.prototype.showDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__offerDetail_offerDetail__["a" /* OfferDetailPage */], {
            id: id
        });
    };
    OffersPage.prototype.addOffer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addOffer_addOffer__["a" /* AddOfferPage */]);
    };
    OffersPage.prototype.showMember = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: userId
        });
    };
    OffersPage.prototype.goToPage = function (menuEntry) {
        var page = menuEntry.page;
        if (page) {
            this.navCtrl.push(page, menuEntry.params);
        }
    };
    OffersPage.prototype.goToFiltersPage = function () {
        this.goToPage(this.filters_action);
    };
    OffersPage.prototype.showCategories = function (myEvent) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */], {
            options: this.categories
            // [ {
            // 	title: ('Clear Filters'),
            // }]
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present({
            ev: myEvent
        });
        this.popover.onDidDismiss(function (data) {
            console.log(data);
            if (data != null && data.id != null) {
                _this.category = data;
                _this.activateFilter();
            }
        });
    };
    OffersPage.prototype.searchUsers = function (myEvent) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_members_members__["a" /* MembersPage */], {
            isPopover: true,
            operation: 'Filter by'
        }, {
            cssClass: 'confirm-popover',
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.popover.present({
            ev: myEvent
        });
        this.popover.onDidDismiss(function (data) {
            // console.log(data);
            if (data != null && data != null) {
                _this.member = data;
                _this.activateFilter();
            }
        });
    };
    OffersPage.prototype.setFilterPage = function (ev) {
        this.keywords = ev.target.value;
        if (this.keywords) {
            this.navCtrl.push(OffersPage_1, {
                filter: "&fragment=" + this.keywords,
                filterName: "'" + this.keywords + "'"
            });
        }
    };
    OffersPage.prototype.setFilter = function (ev) {
        this.keywords = ev.target.value;
        this.activateFilter();
    };
    OffersPage.prototype.activateFilter = function () {
        this.filter = '';
        var filterName = 'Offers';
        this.is_filtered = false;
        if (this.keywords) {
            this.is_filtered = true;
            filterName = filterName + (" of \"" + this.keywords + "\"");
            this.filter = "&fragment=" + this.keywords;
        }
        if (this.member) {
            this.is_filtered = true;
            filterName = filterName + (" by " + this.member.name);
            this.filter = this.filter + ("&user_id=" + this.member.id);
        }
        if (this.category) {
            this.is_filtered = true;
            filterName = filterName + (" in " + this.category.title);
            this.filter = this.filter + ("&category=" + this.category.id);
        }
        this.page = 1; // reset
        this.hasNoMoreData = false;
        this.filterName = filterName;
        this.loadOffers(true);
    };
    OffersPage.prototype.clearFilters = function (myEvent) {
        this.is_filtered = false;
        this.keywords = this.filter = this.filterName = '';
        this.category = this.member = null;
        this.page = 1; // reset
        this.hasNoMoreData = false;
        this.loadOffers(true);
    };
    OffersPage = OffersPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offers',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offers/offers.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{ \'Offers\' | translate }}</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n\n\n	<ion-toolbar>\n		<ion-buttons left>\n			<button ion-button icon-only (click)="showCategories($event)">\n				<ion-icon name="book"></ion-icon>\n			</button>\n			<button ion-button icon-only (click)="searchUsers($event)">\n				<ion-icon name="person"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-searchbar (search)="setFilter($event)" (keyup.enter)="setFilter($event)"></ion-searchbar>\n		<ion-buttons right>\n			<button ion-button icon-only (click)="clearFilters($event)" *ngIf="is_filtered">\n				<ion-icon name="close-circle"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n\n\n	<ion-list class="app-filters" *ngIf="filterName">\n		<ion-item>\n			{{ filterName }}\n		</ion-item>\n	</ion-list>\n\n	<ion-list class="app-items">\n\n		<ion-item *ngIf="noResults && (!offers || !offers.length || offers.length <1) ">No Results</ion-item>\n\n		<ion-item *ngFor="let offer of offers">\n			<ion-row>\n\n				<ion-col col-4 (click)="showDetails(offer.id)" *ngIf="offer.image">\n					<ion-thumbnail>\n						<img [src]="offer.image">\n					</ion-thumbnail>\n				</ion-col>\n\n				<ion-col col-10 (click)="showDetails(offer.id)" *ngIf="!offer.image">\n					<h6>{{ offer.title }}</h6>\n					<div class="description" [innerHTML]="offer.description"></div>\n				</ion-col>\n\n				<ion-col col-6 (click)="showDetails(offer.id)" *ngIf="offer.image">\n					<h6>{{ offer.title }}</h6>\n					<div class="description" [innerHTML]="offer.description"></div>\n				</ion-col>\n\n				<ion-col col-2 class="items-user" (click)="showMember(offer.user_id)">\n					<p>\n						{{ offer.user_id_ref.name }}\n					</p>\n					<ion-avatar *ngIf="offer.user_id_ref.portrait">\n						<img [src]="offer.user_id_ref.portrait">\n					</ion-avatar>\n				</ion-col>\n\n			</ion-row>\n		</ion-item>\n\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offers/offers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_OfferService__["a" /* OfferService */],
            __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], OffersPage);
    return OffersPage;
    var OffersPage_1;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberService = /** @class */ (function () {
    function MemberService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.pageSize = 20;
    }
    MemberService.prototype.list = function (page, filter) {
        if (filter === void 0) { filter = ''; }
        var offset = this.pageSize * (page - 1);
        return this.httpBasicAuth.getWithAuth(this.settings.URL.members + "?depth=1&offset=" + offset + "&limit=" + this.pageSize + "&sort=name,desc" + filter)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (member, key) {
                if (!member.id) {
                    member.id = key;
                }
                return member;
            });
            return response;
        });
    };
    MemberService.prototype.get = function (id) {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.members + "/" + id + "?depth=1");
    };
    MemberService.prototype.post = function (member) {
        return this.httpBasicAuth.postWithAuth(this.settings.URL.members, member);
    };
    MemberService.prototype.patch = function (member) {
        // console.log('patching member');
        // console.log(member);
        return this.httpBasicAuth.patchWithAuth(this.settings.URL.members + "/" + member.id, member);
    };
    MemberService.prototype.describe = function (member) {
        if (member === void 0) { member = {}; }
        return this.httpBasicAuth.options(this.settings.URL.members + "/" + member.id);
    };
    MemberService.prototype.custom = function (href) {
        return this.httpBasicAuth.putWithAuth(this.settings.URL.config + "/" + href, {});
    };
    MemberService.prototype.contact = function (id, fields) {
        if (this.settings.URL.contact)
            var contact_url = this.settings.URL.contact + "/" + id;
        else
            var contact_url = this.settings.SERVER_URL + "/contact/" + id;
        return this.httpBasicAuth.postWithAuth(contact_url, fields);
    };
    MemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], MemberService);
    return MemberService;
}());

//# sourceMappingURL=MemberService.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_WantService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wantDetail_wantDetail__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addWant_addWant__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_members_members__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { KeywordsFilterPage } from '../keywords/keywords';
// import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';





var WantsPage = /** @class */ (function () {
    function WantsPage(viewCtrl, navCtrl, navParams, loadingCtrl, popoverCtrl, wantService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.wantService = wantService;
        this.alertService = alertService;
        this.canPost = false;
    }
    WantsPage_1 = WantsPage;
    WantsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
            this.myActions = this.navParams.data.myActions;
            this.currentUser = this.navParams.data.currentUser;
            this.is_filtered = this.navParams.data.is_filtered;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (_this.deleteWantConfirmDialog) {
                return;
            }
            _this.initPage();
        });
    };
    WantsPage.prototype.initPage = function () {
        var _this = this;
        this.page = 1;
        this.hasNoMoreData = false;
        this.isLoading = false;
        this.wants = [];
        this.wantService.describe().subscribe(function (response) {
            _this.definitionWant = response;
            _this.canPost = !!_this.definitionWant.POST;
            // if (this.canPost) {
            // 	$('page-wants ion-content.content').children().css('margin-bottom', '45px');
            // }
            _this.categories = Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["map"])(_this.definitionWant.POST.category.options, function (category, key) {
                return { id: key, title: category };
            });
        }, function (error) { return _this.alertService.showError(error); });
        this.loadWants(true);
    };
    WantsPage.prototype.setPagination = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_jquery__('page-wants .scroll-content').on('scroll', function (ev) {
            if (_this.hasNoMoreData || _this.isLoading) {
                return;
            }
            if ((ev.target.scrollHeight - ev.target.scrollTop) < 800) {
                _this.loadWants();
            }
        });
    };
    WantsPage.prototype.loadWants = function (from_scratch) {
        var _this = this;
        if (this.hasNoMoreData || this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.loader = this.loadingCtrl.create({
            content: ('Please wait') + '...'
        });
        this.loader.present();
        this.wantService.list(this.page, this.filter).subscribe(function (response) {
            if (from_scratch)
                _this.wants = [];
            if (!_this.filterName)
                _this.filterName = 'Recent Needs';
            if (!response.length) {
                _this.hasNoMoreData = true;
            }
            _this.wants = _this.wants.concat(response);
            _this.page++;
            _this.loader.dismiss();
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.showError(error);
            _this.loader.dismiss();
            _this.isLoading = false;
        });
    };
    WantsPage.prototype.setFilterPage = function (ev) {
        this.keywords = ev.target.value;
        if (this.keywords) {
            this.navCtrl.push(WantsPage_1, {
                filter: "&fragment=" + this.keywords,
                filterName: "'" + this.keywords + "'"
            });
        }
    };
    WantsPage.prototype.showDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wantDetail_wantDetail__["a" /* WantDetailPage */], {
            id: id
        });
    };
    WantsPage.prototype.addWant = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addWant_addWant__["a" /* AddWantPage */]);
    };
    WantsPage.prototype.showMember = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: userId
        });
    };
    WantsPage.prototype.goToPage = function (menuEntry) {
        var page = menuEntry.page;
        if (page) {
            this.navCtrl.push(page, menuEntry.params);
        }
    };
    WantsPage.prototype.goToFilters = function () {
        this.goToPage(this.filters_action);
    };
    WantsPage.prototype.showCategories = function (myEvent) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */], {
            options: this.categories
            // [ {
            // 	title: ('Clear Filters'),
            // }]
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present({
            ev: myEvent
        });
        this.popover.onDidDismiss(function (data) {
            console.log(data);
            if (data != null && data.id != null) {
                _this.category = data;
                _this.activateFilter();
            }
        });
    };
    WantsPage.prototype.searchUsers = function (myEvent) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_members_members__["a" /* MembersPage */], {
            isPopover: true,
            operation: 'Filter by'
        }, {
            cssClass: 'confirm-popover',
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.popover.present({
            ev: myEvent
        });
        this.popover.onDidDismiss(function (data) {
            // console.log(data);
            if (data != null && data != null) {
                _this.member = data;
                _this.activateFilter();
            }
        });
    };
    WantsPage.prototype.setFilter = function (ev) {
        this.keywords = ev.target.value;
        this.activateFilter();
    };
    WantsPage.prototype.activateFilter = function () {
        this.filter = '';
        var filterName = 'Needs';
        this.is_filtered = false;
        if (this.keywords) {
            this.is_filtered = true;
            filterName = filterName + (" of \"" + this.keywords + "\"");
            this.filter = "&fragment=" + this.keywords;
        }
        if (this.member) {
            this.is_filtered = true;
            filterName = filterName + (" by " + this.member.name);
            this.filter = this.filter + ("&user_id=" + this.member.id);
        }
        if (this.category) {
            this.is_filtered = true;
            filterName = filterName + (" in " + this.category.title);
            this.filter = this.filter + ("&category=" + this.category.id);
        }
        this.page = 1; // reset
        this.hasNoMoreData = false;
        this.filterName = filterName;
        this.loadWants(true);
    };
    WantsPage.prototype.clearFilters = function (myEvent) {
        this.is_filtered = false;
        this.keywords = this.filter = this.filterName = '';
        this.category = this.member = null;
        this.page = 1; // reset
        this.hasNoMoreData = false;
        this.loadWants(true);
    };
    WantsPage = WantsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wants',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wants/wants.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{ \'Needs\' | translate }}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-toolbar>\n		<ion-buttons left>\n			<button ion-button icon-only (click)="showCategories($event)">\n				<ion-icon name="book"></ion-icon>\n			</button>\n			<button ion-button icon-only (click)="searchUsers($event)">\n				<ion-icon name="person"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-searchbar (search)="setFilter($event)" (keyup.enter)="setFilter($event)"></ion-searchbar>\n		<ion-buttons right>\n			<button ion-button icon-only (click)="clearFilters($event)" *ngIf="is_filtered">\n				<ion-icon name="close-circle"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n\n	<ion-list class="app-filters" *ngIf="filterName">\n		<ion-item>\n			{{ filterName }}\n		</ion-item>\n	</ion-list>\n	<ion-list class="app-items">\n\n		<ion-item *ngFor="let want of wants">\n\n			<ion-row>\n\n				<ion-col col-2 (click)="showMember(want.user_id.id)" *ngIf="want.image">\n					<ion-thumbnail>\n						<img [src]="want.image || \'assets/images/default_sm.jpg\'">\n					</ion-thumbnail>\n				</ion-col>\n\n				<ion-col col-10 (click)="showDetails(want.id)" *ngIf="!want.image">\n					<h6>{{ want.title }}</h6>\n					<div class="description" [innerHTML]="want.description"></div>\n				</ion-col>\n\n				<ion-col col-8 (click)="showDetails(want.id)" *ngIf="want.image">\n					<h6>{{ want.title }}</h6>\n					<div class="description" [innerHTML]="want.description"></div>\n				</ion-col>\n\n				<ion-col col-2 class="items-user" (click)="showMember(want.user_id)">\n					<p>\n						{{ want.user_id_ref.name }}\n					</p>\n					<ion-avatar *ngIf="want.user_id_ref.portrait">\n						<img [src]="want.user_id_ref.portrait">\n					</ion-avatar>\n				</ion-col>\n\n			</ion-row>\n\n		</ion-item>\n\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wants/wants.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_WantService__["a" /* WantService */],
            __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], WantsPage);
    return WantsPage;
    var WantsPage_1;
}());

//# sourceMappingURL=wants.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersBuilderComponent = /** @class */ (function () {
    function FiltersBuilderComponent(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FiltersBuilderComponent.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.options = this.navParams.data.options;
            this.operation = this.navParams.data.operation;
        }
    };
    FiltersBuilderComponent.prototype.goToPage = function (option) {
        var page = option.page;
        if (page) {
            // this.navCtrl.popToRoot();
            this.navCtrl.push(page, option.params);
        }
        this.viewCtrl.dismiss(option);
    };
    FiltersBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'filters-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/filtersBuilder/filtersBuilder.html"*/'<div class="app-confirm-operation">\n	<ion-list>\n	  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n	  	<i [class]="option.icon" item-start></i>\n	    <ion-label>{{ option.title }}</ion-label>\n	  </ion-item>\n	</ion-list>\n</div>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/filtersBuilder/filtersBuilder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FiltersBuilderComponent);
    return FiltersBuilderComponent;
}());

//# sourceMappingURL=filtersBuilder.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_ConfigService__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, settings, authService, alertService, configService, platform, appVersion) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.settings = settings;
        this.authService = authService;
        this.alertService = alertService;
        this.configService = configService;
        this.platform = platform;
        this.appVersion = appVersion;
        this.formErrors = {
            'community_url': '',
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'community_url': {
                'required': ('Please enter the URL of your local community website')
            },
            'username': {
                'required': ('Email is required')
            },
            'password': {
                'required': ('Password is required')
            }
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.settings.COMMUNITY_LANG = false; // first run
        this.configService.initTranslate();
        if (this.settings.WEB_SITE_URL)
            this.configService.initAppConfig();
        this.buildForm();
        if (this.platform.is('cordova')) {
            this.appVersion.getVersionNumber().then(function (version) {
                _this.settings.APP_VERSION = version;
            });
        }
    };
    LoginPage.prototype.ngAfterContentInit = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__('div.page-login').height(__WEBPACK_IMPORTED_MODULE_7_jquery__('page-login').height());
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.community_url = this.loginForm.value.community_url;
        this.setCommunityURL();
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.rememberMe = this.loginForm.value.rememberMe;
        this.authService.doLogin(this.username, this.password, this.rememberMe).subscribe(function (response) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]); }, function (error) { return _this.alertService.showError(('Please check your details') + '.\n' + error); });
    };
    LoginPage.prototype.goToFullSite = function () {
        window.open(this.settings.WEB_SITE_URL, '_system', 'location=yes');
    };
    LoginPage.prototype.buildForm = function () {
        var _this = this;
        this.community_url = this.settings.WEB_SITE_URL;
        this.loginForm = this.formBuilder.group({
            'community_url': [this.community_url, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'username': [this.username, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'password': [this.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'rememberMe': [this.rememberMe],
        });
        this.loginForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    LoginPage.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    LoginPage.prototype.setCommunityURL = function () {
        // console.log(this.community_url);
        console.log(this.loginForm.value.community_url);
        if (this.loginForm.value.community_url) {
            var old_url = this.settings.WEB_SITE_URL;
            this.settings.WEB_SITE_URL = this.loginForm.value.community_url;
            if (this.settings.WEB_SITE_URL != old_url) {
                this.configService.initAppConfig();
            }
            this.community_url = this.settings.WEB_SITE_URL; // cleaned up
            this.loginForm.value.community_url = this.settings.WEB_SITE_URL;
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n  	<ion-title>{{ \'Welcome\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false">\n	<div class="page-login">\n		<ion-slides [pager]="true" [autoplay]="3000" [loop]="true">\n		  <ion-slide>\n				<div class="image-wrapper">\n					<div class="image">\n						<img src="assets/images/app_logo.png">\n						<h1 class="logo-title">{{ settings.APP_NAME }}</h1>\n					</div>\n				</div>\n		  </ion-slide>\n		  <ion-slide *ngIf="settings.COMMUNITY_NAME && settings.COMMUNITY_LOGO">\n				<div class="image-wrapper">\n					<div class="image">\n						<img src="{{ settings.COMMUNITY_LOGO }}">\n						<h1 class="logo-title">{{ settings.COMMUNITY_NAME }}</h1>\n					</div>\n				</div>\n		  </ion-slide>\n		</ion-slides>\n		<form [formGroup]="loginForm">\n			<ion-list>\n\n        <ion-item>\n			    <ion-label>\n			   		{{ \'URL\' | translate }}\n			   	</ion-label>\n			    <ion-input type="text" placeholder="https://" required formControlName="community_url"  (ionBlur)="setCommunityURL()"></ion-input>\n			  </ion-item>\n\n\n        <ion-item>\n			    <ion-label>\n			   		<i class="ion-person"></i>\n			   	</ion-label>\n			    <ion-input type="text" placeholder="{{ \'Username\' | translate }}" required formControlName="username"></ion-input>\n			  </ion-item>\n			  <ion-item class="form-error" *ngIf="formErrors.username">\n				  <p>{{ formErrors.username }}</p>\n			  </ion-item>\n\n			  <ion-item>\n			    <ion-label>\n			   		<i class="ion-locked"></i>\n			   	</ion-label>\n			    <ion-input type="password" placeholder="{{ \'Password\' | translate }}" required formControlName="password"></ion-input>\n			  </ion-item>\n\n			  <ion-item class="form-error" *ngIf="formErrors.password">\n				  <p>{{ formErrors.password }}</p>\n			  </ion-item>\n\n				<ion-item>\n				  <ion-label>{{ \'Remember me\' | translate }}</ion-label>\n				  <!-- <ion-checkbox checked="true" formControlName="rememberMe"></ion-checkbox> -->\n					<ion-toggle checked="true" formControlName="rememberMe"></ion-toggle>\n				</ion-item>\n\n				<ion-item>\n					<ion-label>\n						{{ \'Use in English\' | translate }}\n					</ion-label>\n					<ion-toggle [(ngModel)]="settings.APP_ENGLISH" [ngModelOptions]="{standalone: true}" (ionChange)="configService.initTranslate()"></ion-toggle>\n				</ion-item>\n\n			</ion-list>\n      <button ion-button full [disabled]="!loginForm.valid" (click)="doLogin()">{{ \'Sign in\' | translate }}</button>\n      <p>{{ settings.APP_NAME }} <span *ngIf="settings.APP_VERSION">{{settings.APP_VERSION}}</span></p>\n\n	  	<p *ngIf="settings.WEB_SITE_URL">\n	  		<a href="#" (click)="goToFullSite()" translate [translateParams]="{name: settings.COMMUNITY_NAME }">Visit the website</a>\n	  	</p>\n\n		</form>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_AlertService__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_8__services_ConfigService__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfferService = /** @class */ (function () {
    function OfferService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.pageSize = 20;
    }
    OfferService.prototype.list = function (page, filter) {
        if (filter === void 0) { filter = ''; }
        var offset = this.pageSize * (page - 1);
        return this.httpBasicAuth.getWithAuth(this.settings.URL.offers + "?depth=2&offset=" + offset + "&limit=" + this.pageSize + "&sort=expires,desc" + filter)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (offer, key) {
                if (!offer.id) {
                    offer.id = key;
                }
                return offer;
            });
            return response;
        });
    };
    OfferService.prototype.get = function (id) {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.offers + "/" + id + "?depth=2");
    };
    OfferService.prototype.delete = function (id) {
        return this.httpBasicAuth.deleteWithAuth(this.settings.URL.offers + "/" + id);
    };
    OfferService.prototype.post = function (offer) {
        return this.httpBasicAuth.postWithAuth(this.settings.URL.offers, offer);
    };
    OfferService.prototype.describe = function () {
        return this.httpBasicAuth.options(this.settings.URL.offers);
    };
    OfferService.prototype.custom = function (href) {
        return this.httpBasicAuth.putWithAuth(this.settings.URL.config + "/" + href, {});
    };
    OfferService.prototype.patch = function (id, offer) {
        return this.httpBasicAuth.patchWithAuth(this.settings.URL.offers + "/" + id, offer);
    };
    OfferService.prototype.save = function (offer, id) {
        if (id)
            return this.patch(id, offer);
        else
            return this.post(offer);
    };
    OfferService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], OfferService);
    return OfferService;
}());

//# sourceMappingURL=OfferService.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WantService = /** @class */ (function () {
    function WantService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.pageSize = 20;
    }
    WantService.prototype.list = function (page, filter) {
        if (filter === void 0) { filter = ''; }
        var offset = this.pageSize * (page - 1);
        return this.httpBasicAuth.getWithAuth(this.settings.URL.wants + "?depth=2&offset=" + offset + "&limit=" + this.pageSize + "&sort=expires,desc" + filter)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (want, key) {
                if (!want.id) {
                    want.id = key;
                }
                return want;
            });
            return response;
        });
    };
    WantService.prototype.get = function (id) {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.wants + "/" + id + "?depth=2");
    };
    WantService.prototype.delete = function (id) {
        return this.httpBasicAuth.deleteWithAuth(this.settings.URL.wants + "/" + id);
    };
    WantService.prototype.post = function (want) {
        return this.httpBasicAuth.postWithAuth(this.settings.URL.wants, want);
    };
    WantService.prototype.describe = function () {
        return this.httpBasicAuth.options(this.settings.URL.wants);
    };
    WantService.prototype.custom = function (href) {
        return this.httpBasicAuth.putWithAuth(this.settings.URL.config + "/" + href, {});
    };
    WantService.prototype.patch = function (id, want) {
        return this.httpBasicAuth.patchWithAuth(this.settings.URL.wants + "/" + id, want);
    };
    WantService.prototype.save = function (want, id) {
        if (id)
            return this.patch(id, want);
        else
            return this.post(want);
    };
    WantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], WantService);
    return WantService;
}());

//# sourceMappingURL=WantService.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_WantService__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddWantPage = /** @class */ (function () {
    function AddWantPage(viewCtrl, navParams, loadingCtrl, popoverCtrl, authService, wantService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.wantService = wantService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
    }
    AddWantPage_1 = AddWantPage;
    AddWantPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoaded = false;
        if (this.navParams.data) {
            this.editWant = this.navParams.data.want;
            if (this.editWant)
                this.wantID = this.editWant.id;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.authService.userInfo.subscribe(function (userInfo) {
                    _this.wantService.describe().subscribe(function (response) {
                        _this.isLoaded = true;
                        _this.definitionWant = response;
                        if (_this.definitionWant.POST.user_id) {
                            _this.definitionWant.POST.user_id.default = userInfo.name;
                            _this.definitionWant.POST.user_id.disabled = true;
                        }
                        if (_this.editWant) {
                            for (var i in _this.editWant) {
                                if (_this.editWant[i] && _this.definitionWant.POST[i]) {
                                    _this.definitionWant.POST[i].default = _this.editWant[i];
                                }
                            }
                        }
                        _this.fields = _this.definitionWant.POST;
                        console.log(_this.fields);
                        _this.loader.dismiss();
                    }, function (error) {
                        _this.alertService.showError(error);
                        _this.loader.dismiss();
                    });
                });
            }
        });
    };
    AddWantPage.prototype.onChanged = function (options) {
        this.want = options.value;
        this.isValid = options.isValid;
    };
    AddWantPage.prototype.addWant = function () {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionWant.POST,
            operation: ('Want')
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.wantService.save(_this.want, _this.wantID).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: ('Need'),
                        options: [{
                                title: ('Post Another Need'),
                                icon: 'ion-edit',
                                page: AddWantPage_1
                            }, {
                                title: ('Browse Needs'),
                                icon: 'ion-pin',
                                page: __WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__["a" /* WantsPage */]
                            }]
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    AddWantPage = AddWantPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-want',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addWant/addWant.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Add Need\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addWant()">{{ \'Submit\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addWant/addWant.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_WantService__["a" /* WantService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], AddWantPage);
    return AddWantPage;
    var AddWantPage_1;
}());

//# sourceMappingURL=addWant.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MemberService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keywords_keywords__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MembersPage = /** @class */ (function () {
    function MembersPage(viewCtrl, navCtrl, navParams, loadingCtrl, popoverCtrl, memberService, alertService, keyboard) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.memberService = memberService;
        this.alertService = alertService;
        this.keyboard = keyboard;
    }
    MembersPage_1 = MembersPage;
    MembersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
            this.isPopover = this.navParams.data.isPopover;
            this.operation = this.navParams.data.operation;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.page = 1;
            _this.hasNoMoreData = false;
            _this.isLoading = false;
            _this.members = [];
            if (_this.filter)
                _this.loadMembers(); // only load when searching
            setTimeout(function () {
                _this.searchbar.setFocus();
            }, 200);
            _this.keyboard.onKeyboardShow().subscribe(function (data) {
                _this.searchbar.setFocus();
            });
        });
    };
    MembersPage.prototype.setPagination = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_jquery__('page-members .scroll-content').on('scroll', function (ev) {
            if (_this.hasNoMoreData || _this.isLoading) {
                return;
            }
            if ((ev.target.scrollHeight - ev.target.scrollTop) < 800) {
                _this.loadMembers();
            }
        });
    };
    MembersPage.prototype.loadMembers = function () {
        var _this = this;
        if (this.hasNoMoreData || this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.loader = this.loadingCtrl.create({
            content: ('Please wait') + '...'
        });
        this.loader.present();
        this.memberService.list(this.page, this.filter).subscribe(function (response) {
            if (!response.length) {
                _this.hasNoMoreData = true;
            }
            _this.members = _this.members.concat(response);
            _this.page++;
            _this.loader.dismiss();
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.showError(error);
            _this.loader.dismiss();
            _this.isLoading = false;
        });
    };
    MembersPage.prototype.showDetails = function (member) {
        if (this.isPopover) {
            this.viewCtrl.dismiss(member);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
                id: member.id
            });
        }
    };
    MembersPage.prototype.showFilters = function () {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */], {
            options: [{
                    title: ('Show By Keyword'),
                    page: __WEBPACK_IMPORTED_MODULE_5__keywords_keywords__["a" /* KeywordsFilterPage */],
                    params: {
                        title: ('Members'),
                        page: MembersPage_1
                    }
                }, {
                    title: ('Clear Filters'),
                    page: MembersPage_1
                }]
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present();
    };
    MembersPage.prototype.setFilterPage = function (ev) {
        this.keywords = ev.target.value;
        if (this.keywords) {
            this.navCtrl.push(MembersPage_1, {
                filter: "&fragment=" + this.keywords,
                filterName: "'" + this.keywords + "'"
            });
        }
    };
    MembersPage.prototype.setFilter = function (ev) {
        this.keywords = ev.target.value;
        if (this.keywords) {
            this.page = 1; // reset
            this.members = [];
            this.hasNoMoreData = false;
            this.filter = "&fragment=" + this.keywords;
            this.loadMembers();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("searchbar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Searchbar */])
    ], MembersPage.prototype, "searchbar", void 0);
    MembersPage = MembersPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-members',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/members/members.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{ operation | translate }} {{ \'Member\' | translate }}</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n\n	<ion-toolbar>\n		<ion-searchbar #searchbar (search)="setFilter($event)" (keyup.enter)="setFilter($event)"></ion-searchbar>\n	</ion-toolbar>\n\n\n	<ion-list class="app-filters" *ngIf="filterName">\n		<ion-item>\n			{{ \'Members found for\' | translate }} {{ filterName }}\n		</ion-item>\n	</ion-list>\n\n	<ion-list class="app-items small">\n		<ion-item *ngFor="let member of members" (click)="showDetails(member)">\n			<ion-avatar item-start>\n				<img [src]="member.portrait || \'assets/images/default_user.jpg\'">\n			</ion-avatar>\n			<h6>{{ member.name }}</h6>\n			<ion-note>{{ member.locality }}</ion-note>\n			<p class="description">{{ member.aboutme }}</p>\n		</ion-item>\n	</ion-list>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showFilters()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/members/members.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_MemberService__["a" /* MemberService */],
            __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MembersPage);
    return MembersPage;
    var MembersPage_1;
}());

//# sourceMappingURL=members.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_OfferService__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_offers_offers__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddOfferPage = /** @class */ (function () {
    function AddOfferPage(viewCtrl, navParams, loadingCtrl, popoverCtrl, authService, offerService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.offerService = offerService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
    }
    AddOfferPage_1 = AddOfferPage;
    AddOfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoaded = false;
        if (this.navParams.data) {
            this.editOffer = this.navParams.data.offer;
            if (this.editOffer)
                this.offerID = this.editOffer.id;
            // console.log("navParam editOffer");
            // console.log(this.editOffer);
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.authService.userInfo.subscribe(function (userInfo) {
                    _this.offerService.describe().subscribe(function (response) {
                        _this.isLoaded = true;
                        _this.definitionOffer = response;
                        if (_this.definitionOffer.POST.user_id) {
                            _this.definitionOffer.POST.user_id.default = userInfo.name;
                            _this.definitionOffer.POST.user_id.disabled = true;
                        }
                        // console.log(this.editOffer)
                        if (_this.editOffer) {
                            for (var i in _this.editOffer) {
                                if (_this.editOffer[i] && _this.definitionOffer.POST[i]) {
                                    _this.definitionOffer.POST[i].default = _this.editOffer[i];
                                }
                            }
                        }
                        _this.fields = _this.definitionOffer.POST;
                        _this.loader.dismiss();
                    }, function (error) {
                        _this.alertService.showError(error);
                        _this.loader.dismiss();
                    });
                });
            }
        });
    };
    AddOfferPage.prototype.onChanged = function (options) {
        this.offer = options.value;
        this.isValid = options.isValid;
    };
    AddOfferPage.prototype.addOffer = function () {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionOffer.POST,
            operation: ('Offer')
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: ('Please wait') + '...'
                });
                _this.loader.present();
                _this.offerService.save(_this.offer, _this.offerID).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: ('Offer'),
                        options: [{
                                title: ('Post Another Offer'),
                                icon: 'ion-edit',
                                page: AddOfferPage_1
                            }, {
                                title: ('Browse Offers'),
                                icon: 'ion-pricetag',
                                page: __WEBPACK_IMPORTED_MODULE_7__pages_offers_offers__["a" /* OffersPage */]
                            }]
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    AddOfferPage = AddOfferPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-offer',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addOffer/addOffer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Add Offer\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addOffer()">{{ \'Submit\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addOffer/addOffer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_OfferService__["a" /* OfferService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], AddOfferPage);
    return AddOfferPage;
    var AddOfferPage_1;
}());

//# sourceMappingURL=addOffer.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionService = /** @class */ (function () {
    function TransactionService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
    }
    TransactionService.prototype.list = function (filter) {
        if (filter === void 0) { filter = ''; }
        return this.httpBasicAuth.getWithAuth(this.settings.URL.transactions + "?depth=2&" + filter)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (transaction, key) {
                if (!transaction.id) {
                    transaction.id = key;
                }
                return transaction;
            });
            return response;
        });
    };
    TransactionService.prototype.get = function (id) {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.transactions + "/" + id + "?depth=2");
    };
    TransactionService.prototype.post = function (transaction) {
        return this.httpBasicAuth.postWithAuth(this.settings.URL.transactions, transaction);
    };
    TransactionService.prototype.describe = function () {
        return this.httpBasicAuth.options(this.settings.URL.transactions)
            .map(function (response) {
            return response;
        });
    };
    TransactionService.prototype.custom = function (href) {
        return this.httpBasicAuth.putWithAuth(this.settings.URL.config + "/" + href, {});
    };
    TransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], TransactionService);
    return TransactionService;
}());

//# sourceMappingURL=TransactionService.js.map

/***/ })

},[397]);
//# sourceMappingURL=main.js.map