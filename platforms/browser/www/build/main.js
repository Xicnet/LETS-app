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


var AlertService = (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.showError = function (message) {
        console.log('showError');
        console.error(message);
        var show = ((message.error) ? message.error : (message) ? message : ('Unknown error'));
        return this.alertCtrl.create({
            title: ('Error'),
            subTitle: show,
            buttons: ['OK']
        }).present();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AlertService);

//# sourceMappingURL=AlertService.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_offers_offers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_addOffer_addOffer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_wants_wants__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_addWant_addWant__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addTransaction_addTransaction__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_members_members__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_userProfile_userProfile__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menu_option__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_ConfigService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_version__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var HomePage = (function () {
    function HomePage(viewCtrl, navCtrl, popoverCtrl, authService, settings, configService, platform, appVersion) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.settings = settings;
        this.configService = configService;
        this.platform = platform;
        this.appVersion = appVersion;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.appVersion.getVersionNumber().then(function (version) {
                // this.version = version;
                _this.settings.APP_VERSION = version;
            });
        }
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
                    ]
                },
                {
                    header: ('Community'),
                    menu_items: [
                        {
                            title: ('Browse members'),
                            icon: 'people',
                            page: __WEBPACK_IMPORTED_MODULE_10__pages_members_members__["a" /* MembersPage */]
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
                                filterName: _this.member.name,
                                myActions: true
                            },
                        },
                        {
                            title: ('View my needs'),
                            icon: 'list',
                            page: __WEBPACK_IMPORTED_MODULE_6__pages_wants_wants__["a" /* WantsPage */],
                            params: {
                                filter: "&user_id=" + _this.member.id,
                                filterName: _this.member.name,
                                myActions: true
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
    };
    HomePage.prototype.showOptions = function (menuEntry, $event) {
        if (menuEntry.options && menuEntry.options.length) {
            this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_13__menu_option__["a" /* MenuOptionPopover */], {
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
    HomePage.prototype.goToFullSite = function () {
        window.open(this.settings.WEB_SITE_URL, '_system', 'location=yes');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><a href="#" (click)="goToFullSite()">{{ settings.COMMUNITY_NAME || settings.APP_NAME }}</a></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false">\n  <ion-list class="home-header">\n    <ion-item>\n      <p [innerHTML]="member && member.balance" class="balance" item-end></p>\n      <ion-avatar item-start>\n        <img [src]="member && member.image || member && member.portrait || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n      <h2 translate [translateParams]="{name: member.name }">Hello!</h2>\n      <p translate [translateParams]="{locality: member.locality || \'your area\' }">What\'s up in your area today?</p>\n    </ion-item>\n  </ion-list>\n\n<ion-list class="home-nav">\n	<ng-container *ngFor="let menu of menus">\n\n		<ion-list-header *ngIf="menu.header">{{ menu.header | translate }}</ion-list-header>\n\n		<ion-item *ngFor="let menuEntry of menu.menu_items" (click)="goToPage(menuEntry);showOptions(menuEntry, $event)">\n      <ion-icon [name]="menuEntry.icon" item-start></ion-icon>\n			{{ menuEntry.title | translate }}\n      <i class="ion-arrow-down-b" *ngIf="menuEntry.options && menuEntry.options.length" item-end></i>\n    </ion-item>\n\n  </ng-container>\n\n	<ion-item (click)="doLogout()">\n    <ion-icon name="log-out" item-start></ion-icon>\n    {{ \'Log Out\' | translate }}\n	</ion-item>\n\n	<ion-list-header>{{ settings.APP_NAME }} <span *ngIf="settings.APP_VERSION">{{settings.APP_VERSION}}</span></ion-list-header>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_14__app_app_settings__["a" /* AppSettings */],
        __WEBPACK_IMPORTED_MODULE_15__services_ConfigService__["a" /* ConfigService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_version__["a" /* AppVersion */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 128:
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
var CategoriesFilterPage = (function () {
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
    return CategoriesFilterPage;
}());
CategoriesFilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-categories',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ title || translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list class="app-items">\n    <ion-item *ngFor="let category of categories" (click)="setFilter(category)">\n      <h5>{{ category.name }}</h5>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/categories/categories.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CategoriesFilterPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(17);
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








var AddTransactionPage = AddTransactionPage_1 = (function () {
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
    return AddTransactionPage;
}());
AddTransactionPage = AddTransactionPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-transaction',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addTransaction/addTransaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Record Transaction\' | translate }} - {{ title | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addTransaction()">{{ \'Submit\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addTransaction/addTransaction.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__["a" /* TransactionService */],
        __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
], AddTransactionPage);

var AddTransactionPage_1;
//# sourceMappingURL=addTransaction.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addTransaction_addTransaction__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transactionDetail_transactionDetail__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TransactionsPage = (function () {
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
    return TransactionsPage;
}());
TransactionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transactions',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactions/transactions.html"*/'<ion-header>\n  <ion-navbar>\n		<ion-title>{{ \'Transactions\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="ui success message" *ngIf="success">\n    <i class="close icon"></i>\n    <div class="header">{{ \'Success!\' | translate }}</div>\n    <p>{{ \'New transaction created\' | translate }}.</p>\n  </div>\n\n  <ion-list class="app-items">\n    <ion-item *ngFor="let transaction of transactions">\n\n      <h6>{{ transaction.description }}</h6>\n      <p class="description">\n        <span [innerHTML]="transaction.amount"></span> {{ \'from\' | translate }} {{ transaction.payer_ref.name }} {{ \'to\' | translate }} {{ transaction.payee_ref.name }}\n      </p>\n\n      <!-- <button ion-button (click)="showDetails(transaction.id)">View</button> -->\n\n      <ng-container *ngFor="let link of transaction._links">\n        <button *ngIf="link.rel !=\'self\' && link.rel !=\'view\'" class="edit" ion-button (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n        <button *ngIf="link.rel ==\'self\' || link.rel ==\'view\'" class="view" ion-button (click)="showDetails(transaction.id)">{{link.label || \'Details\'}}</button>\n      </ng-container>\n\n    </ion-item>\n  </ion-list>\n\n  <!-- <button *ngIf="canPost" class="ui add-new button" (click)="addTransaction()">\n    <i class="plus icon"></i> New Transaction\n  </button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactions/transactions.html"*/
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

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 131:
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


var FiltersBuilderComponent = (function () {
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
            this.viewCtrl.dismiss();
        }
    };
    return FiltersBuilderComponent;
}());
FiltersBuilderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'filters-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/filtersBuilder/filtersBuilder.html"*/'<div class="app-confirm-operation">\n	<ion-list>\n	  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n	  	<i [class]="option.icon" item-start></i>\n	    <ion-label>{{ option.title }}</ion-label>\n	  </ion-item>\n	</ion-list>\n</div>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/filtersBuilder/filtersBuilder.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FiltersBuilderComponent);

//# sourceMappingURL=filtersBuilder.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigService = (function () {
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
        console.log(this.settings.URL.config);
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
        var overide = this.settings.APP_ENGLISH;
        // console.log("lang? "+this.settings.COMMUNITY_LANG);
        // console.log("english? "+overide);
        if (!overide || overide == 'false') {
            if (this.settings.COMMUNITY_LANG) {
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
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */],
        __WEBPACK_IMPORTED_MODULE_3__HttpBasicAuth__["a" /* HttpBasicAuth */],
        __WEBPACK_IMPORTED_MODULE_5__AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_4__AlertService__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
], ConfigService);

//# sourceMappingURL=ConfigService.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(25);
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





var AuthService = (function () {
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
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */],
        __WEBPACK_IMPORTED_MODULE_4__HttpBasicAuth__["a" /* HttpBasicAuth */]])
], AuthService);

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 22:
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


var ConfirmationBuilderComponent = (function () {
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
    return ConfirmationBuilderComponent;
}());
ConfirmationBuilderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirmation-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/confirmationBuilder/confirmationBuilder.html"*/'<div class="app-confirm-operation">\n	<h6>{{ \'Confirm\' | translate }} {{ operation | translate }}</h6>\n	<ion-grid>\n	  <ion-row *ngFor="let field of fields | keys">\n	    <ion-col class="label" col-6 *ngIf="field.$value">{{ field.label }}</ion-col>\n	    <ion-col class="value" col-6 *ngIf="field.$value" [ngSwitch]="field.type" >\n	    	<div *ngSwitchCase="\'image\'" class="image">\n					<img *ngIf="field.$value" [src]="field.$value">\n				</div>\n				<div *ngSwitchDefault>{{ field.$value }}</div>\n	    </ion-col>\n	  </ion-row>\n	  <ion-row class="actions">\n	  	<ion-col col-6>\n	  		<button class="cancel" (click)="doCancel()">\n	  			<i class="ion-ios-arrow-back"></i> {{ \'Back\' | translate }}\n	  		</button>\n	  	</ion-col>\n	  	<ion-col col-6>\n	  		<button class="confim" (click)="doConfirm()">{{ \'Confirm\' | translate }}</button>\n	  	</ion-col>\n	  </ion-row>\n	</ion-grid>\n</div>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/confirmationBuilder/confirmationBuilder.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ConfirmationBuilderComponent);

//# sourceMappingURL=confirmationBuilder.js.map

/***/ }),

/***/ 25:
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

var AppSettings = (function () {
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
            return 'LETS Community App';
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
                return 'Your Local LETS';
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
    return AppSettings;
}());
AppSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppSettings);

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MemberService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memberContact_memberContact__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_offers_offers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemberDetailPage = (function () {
    function MemberDetailPage(params, viewCtrl, navCtrl, loadingCtrl, memberService, popoverCtrl, alertService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.memberService = memberService;
        this.popoverCtrl = popoverCtrl;
        this.alertService = alertService;
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
            filterName: this.member.name,
        });
    };
    MemberDetailPage.prototype.memberWants = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__["a" /* WantsPage */], {
            filter: '&user_id=' + this.params.get('id'),
            filterName: this.member.name,
        });
    };
    return MemberDetailPage;
}());
MemberDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-memberDetail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberDetail/memberDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Member Details\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="app-item-details" *ngIf="member">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="member.portrait || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n\n      <h2 class="title">{{ member.name }}</h2>\n\n      <button class="view" ion-button (click)="contactMember()">{{ \'Message\' | translate }}</button>\n\n      <p class="subtitle" *ngIf="member.mail">\n        <a ion-button icon-start href="mailto:{{member.mail}}">\n          <ion-icon name="mail"></ion-icon>\n          {{ member.mail }}\n        </a>\n      </p>\n\n      <p class="subtitle" *ngIf="member.phone">\n        <a ion-button icon-start href="tel:{{member.phone}}">\n          <ion-icon name="call"></ion-icon>\n          {{ member.phone }}\n        </a>\n      </p>\n\n			<p>\n				<button class="view" ion-button (click)="memberOffers()">{{ \'Offers\' | translate }}</button>\n				<button class="view" ion-button (click)="memberWants()">{{ \'Needs\' | translate }}</button>\n			</p>\n\n\n      <ion-item class="balance" *ngIf="member.balance">\n  			<ion-avatar item-start>\n        	<ion-icon name="trending-up"></ion-icon>\n      	</ion-avatar>\n  			<p [innerHTML]="member && member.balance"></p>\n  		</ion-item>\n\n\n      <ng-container *ngFor="let link of member._links">\n        <button *ngIf="link.rel !=\'self\'" class="edit" ion-button (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n      </ng-container>\n\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <p *ngIf="member.locality"><b>{{ \'Locality\' | translate }}:</b> {{ member.locality }}</p>\n          <p *ngIf="member.street_address"><b>{{ \'Address\' | translate }}:</b> {{ member.street_address }}</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <p class="description">{{ member.aboutme }}</p>\n  </ion-card>\n</ion-content>\n<!-- <ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberDetail/memberDetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services_MemberService__["a" /* MemberService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
], MemberDetailPage);

//# sourceMappingURL=memberDetail.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBasicAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(17);
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




var HttpBasicAuth = (function () {
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
    return HttpBasicAuth;
}());
HttpBasicAuth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */]])
], HttpBasicAuth);

//# sourceMappingURL=HttpBasicAuth.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_OfferService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addOffer_addOffer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OfferDetailPage = (function () {
    function OfferDetailPage(params, viewCtrl, navCtrl, loadingCtrl, popoverCtrl, offerService, authService, alertService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.offerService = offerService;
        this.authService = authService;
        this.alertService = alertService;
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
    return OfferDetailPage;
}());
OfferDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-offer-detail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offerDetail/offerDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Offer Details\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="app-item-details" *ngIf="offer">\n    <h2 class="title">{{ offer.title }}</h2>\n\n    <div class="image" [class.expanded]="imageExpanded" *ngIf="offer.image" (click)="expandImage()">\n      <img [src]="offer.image">\n    </div>\n\n    <div class="description" [innerHTML]="offer.description"></div>\n    <ion-row>\n      <ion-col col-6 (click)="showMember(offer.user_id)">\n        <ion-item class="item-avatar">\n          <ion-avatar>\n            <img [src]="offer.user_id_ref.portrait || \'assets/images/default_user.jpg\'">\n          </ion-avatar>\n					<p>\n						{{ offer.user_id_ref.name }}\n					</p>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item>\n          <p *ngIf="offer.$category">{{ \'Category\' | translate }}: <b>{{ offer.$category }}</b></p>\n          <p *ngIf="offer.changed">{{ \'Posted\' | translate }}: <b>{{ offer.changed }}</b></p>\n          <p *ngIf="offer.expires">{{ \'Expires\' | translate }}: <b>{{ offer.expires }}</b></p>\n\n          <ng-container *ngIf="currentUser == offer.user_id">\n            <button class="my-actions edit" ion-button (click)="editOffer(offer)">Edit</button>\n            <button class="my-actions delete" ion-button (click)="deleteOffer(offer.id)">Delete</button>\n          </ng-container>\n\n          <ng-container *ngFor="let link of offer._links">\n            <button *ngIf="link.rel !=\'self\'" class="my-actions edit" ion-button (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n          </ng-container>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<!-- <ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offerDetail/offerDetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__services_OfferService__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_7__services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
], OfferDetailPage);

//# sourceMappingURL=offerDetail.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_MemberService__ = __webpack_require__(54);
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




var ContactMemberPage = (function () {
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
    return ContactMemberPage;
}());
ContactMemberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact-member',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberContact/memberContact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Contact Member\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="sendMessage()">{{ \'Send\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberContact/memberContact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_5__services_MemberService__["a" /* MemberService */],
        __WEBPACK_IMPORTED_MODULE_2__services_AlertService__["a" /* AlertService */]])
], ContactMemberPage);

//# sourceMappingURL=memberContact.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_WantService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addWant_addWant__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WantDetailPage = (function () {
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
    return WantDetailPage;
}());
WantDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-want-detail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wantDetail/wantDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Need Details\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="app-item-details" *ngIf="want">\n    <h2 class="title">{{ want.title }}</h2>\n\n    <div class="description" [innerHTML]="want.description"></div>\n    <ion-row>\n      <ion-col col-6 (click)="showMember(want.user_id)">\n        <ion-item class="item-avatar">\n          <ion-avatar>\n            <img [src]="want.user_id_ref.portrait || \'assets/images/default_user.jpg\'">\n          </ion-avatar>\n					<p>\n						{{ want.user_id_ref.name }}\n					</p>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n					<p *ngIf="want.$category">{{ \'Category\' | translate }}: <b>{{ want.$category }}</b></p>\n          <p *ngIf="want.changed">{{ \'Posted\' | translate }}: <b>{{ want.changed }}</b></p>\n          <p *ngIf="want.expires">{{ \'Expires\' | translate }}: <b>{{ want.expires }}</b></p>\n\n          <ng-container *ngIf="currentUser == want.user_id">\n            <button class="my-actions edit" ion-button (click)="editWant(want)" >{{ \'Edit\' | translate }}</button>\n            <button class="my-actions delete" ion-button (click)="deleteWant(want.id)" >{{ \'Delete\' | translate }}</button>\n          </ng-container>\n\n          <ng-container *ngFor="let link of want._links">\n            <button *ngIf="link.rel !=\'self\'" class="my-actions edit" ion-button (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n          </ng-container>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<!-- <ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wantDetail/wantDetail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services_WantService__["a" /* WantService */],
        __WEBPACK_IMPORTED_MODULE_6__services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
], WantDetailPage);

//# sourceMappingURL=wantDetail.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionDetailPage = (function () {
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
    return TransactionDetailPage;
}());
TransactionDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-transaction-detail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactionDetail/transactionDetail.html"*/'<ion-header>\n  <ion-navbar>\n		<ion-title>{{ \'Transaction\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="ui success message" *ngIf="success">\n    <i class="close icon"></i>\n    <div class="header">{{ \'Success!\' | translate }}</div>\n    <p>{{ \'New transaction created\' | translate }}.</p>\n  </div>\n\n  <ion-card *ngIf="transaction">\n    <ion-card-content>\n      <p> {{ transaction.description }} </p>\n      <p> <span [innerHTML]="transaction.amount"></span> </p>\n      <p>from\n        <button ion-button small class="button-normal" (click)="showMember(transaction.payer_ref.id)">{{ transaction.payer_ref.name }}</button>\n      <p>to\n        <button ion-button small class="button-normal" (click)="showMember(transaction.payee_ref.id)">{{ transaction.payee_ref.name }}</button>\n      </p>\n\n      <ng-container *ngFor="let link of transaction._links">\n        <button *ngIf="link.rel !=\'self\' && link.rel !=\'view\'" class="edit" ion-button small (click)="customAction(link.label, link.href, link.confirm)">{{link.label}}</button>\n      </ng-container>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactionDetail/transactionDetail.html"*/
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

//# sourceMappingURL=transactionDetail.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MemberService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keywords_keywords__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MembersPage = MembersPage_1 = (function () {
    function MembersPage(viewCtrl, navCtrl, navParams, loadingCtrl, popoverCtrl, memberService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.memberService = memberService;
        this.alertService = alertService;
    }
    MembersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.page = 1;
            _this.hasNoMoreData = false;
            _this.isLoading = false;
            _this.members = [];
            _this.loadMembers();
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
    MembersPage.prototype.showDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: id
        });
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
    MembersPage.prototype.setFilter = function (ev) {
        this.keywords = ev.target.value;
        if (this.keywords) {
            this.navCtrl.push(MembersPage_1, {
                filter: "&fragment=" + this.keywords,
                filterName: "'" + this.keywords + "'"
            });
        }
    };
    return MembersPage;
}());
MembersPage = MembersPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-members',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/members/members.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Members\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n	<ion-toolbar>\n		<ion-searchbar (search)="setFilter($event)"></ion-searchbar>\n	</ion-toolbar>\n\n\n  <ion-list class="app-filters" *ngIf="filterName">\n    <ion-item>\n      {{ \'Members found for\' | translate }} {{ filterName }}\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="app-items small">\n    <ion-item *ngFor="let member of members" (click)="showDetails(member.id)">\n      <ion-avatar item-start>\n        <img [src]="member.portrait || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n      <h6>{{ member.name }}</h6>\n      <ion-note>{{ member.locality }}</ion-note>\n      <p class="description">{{ member.aboutme }}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showFilters()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/members/members.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__services_MemberService__["a" /* MemberService */],
        __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
], MembersPage);

var MembersPage_1;
//# sourceMappingURL=members.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordsFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
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



var KeywordsFilterPage = (function () {
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
    return KeywordsFilterPage;
}());
KeywordsFilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-keywords',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/keywords/keywords.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ title || translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<form class="app-form" [formGroup]="keywordsForm">\n		<ion-list>\n	  	<ion-item>\n	  		<ion-input type="text" placeholder="Keyword" formControlName="keywords"></ion-input>\n	  	</ion-item>\n	  </ion-list>\n	  <button class="confirm-button" ion-button full [disabled]="!keywordsForm.valid" (click)="setFilter()">{{ \'Search\' | translate }}</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/keywords/keywords.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
], KeywordsFilterPage);

//# sourceMappingURL=keywords.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MemberService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_filtersBuilder_filtersBuilder__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wants_wants__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_offers_offers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__ = __webpack_require__(130);
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












var ProfilePage = (function () {
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
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user-profile',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/userProfile/userProfile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'My Account\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list class="home-header">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="user && user.image || user && user.portrait || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n      <h2>{{ user && user.name }}</h2>\n      <ion-item class="balance">\n  			<ion-avatar item-start>\n        	<ion-icon name="trending-up"></ion-icon>\n      	</ion-avatar>\n  			<p [innerHTML]="user && user.balance"></p>\n  		</ion-item>\n    </ion-item>\n\n  </ion-list>\n\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n\n</ion-content>\n\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="editProfile()">{{ \'Save\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/userProfile/userProfile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__services_MemberService__["a" /* MemberService */],
        __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
], ProfilePage);

//# sourceMappingURL=userProfile.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuOptionPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(56);
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



var MenuOptionPopover = (function () {
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
    return MenuOptionPopover;
}());
MenuOptionPopover = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'popover-menu-option',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/menu-option.html"*/'<ion-list class="options-popover">\n  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n    <ion-label>{{ option.title | translate }}</ion-label>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/menu-option.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MenuOptionPopover);

//# sourceMappingURL=menu-option.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(386);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ConfigService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_TransactionService__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_OfferService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_WantService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_MemberService__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_formBuilder_formBuilder__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_fieldBuilder_fieldBuilder__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_filtersBuilder_filtersBuilder__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_menu_option__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_addTransaction_addTransaction__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactions__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_transactionDetail_transactionDetail__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_offers_offers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_offerDetail_offerDetail__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_addOffer_addOffer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_wants_wants__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_wantDetail_wantDetail__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_addWant_addWant__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_categories_categories__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_keywords_keywords__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_UnixTimeToMoment__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_ObjectKeys__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_members_members__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_memberDetail_memberDetail__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_userProfile_userProfile__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_memberContact_memberContact__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_app_version__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_common_http__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ngx_translate_core__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ngx_translate_http_loader__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































 // ionic v3







function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_46__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
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
            __WEBPACK_IMPORTED_MODULE_44__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_45__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_45__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_44__angular_common_http__["a" /* HttpClient */]]
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
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_43__ionic_native_app_version__["a" /* AppVersion */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreActionsBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(67);
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
var MoreActionsBuilderComponent = (function () {
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
    return MoreActionsBuilderComponent;
}());
MoreActionsBuilderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'more-actions-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/moreActionsBuilder/moreActionsBuilder.html"*/'<div class="app-confirm-operation">\n	<h6>{{ operation | translate }} {{ status | translate }}</h6>\n	<ion-list>\n	  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n	  	<i [class]="option.icon" item-start></i>\n	    <ion-label>{{ option.title | translate }}</ion-label>\n	  </ion-item>\n	  <ion-item (click)="goBack()">\n	  	<i class="ion-back" item-start></i>\n	    <ion-label>{{ \'Go Back\' | translate }}</ion-label>\n	  </ion-item>\n		<ion-item (click)="goToHome()">\n	  	<i class="ion-home" item-start></i>\n	    <ion-label>{{ \'Go Home\' | translate }}</ion-label>\n	  </ion-item>\n	</ion-list>\n</div>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/moreActionsBuilder/moreActionsBuilder.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], MoreActionsBuilderComponent);

//# sourceMappingURL=moreActionsBuilder.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 232,
	"./af.js": 232,
	"./ar": 233,
	"./ar-dz": 234,
	"./ar-dz.js": 234,
	"./ar-ly": 235,
	"./ar-ly.js": 235,
	"./ar-ma": 236,
	"./ar-ma.js": 236,
	"./ar-sa": 237,
	"./ar-sa.js": 237,
	"./ar-tn": 238,
	"./ar-tn.js": 238,
	"./ar.js": 233,
	"./az": 239,
	"./az.js": 239,
	"./be": 240,
	"./be.js": 240,
	"./bg": 241,
	"./bg.js": 241,
	"./bn": 242,
	"./bn.js": 242,
	"./bo": 243,
	"./bo.js": 243,
	"./br": 244,
	"./br.js": 244,
	"./bs": 245,
	"./bs.js": 245,
	"./ca": 246,
	"./ca.js": 246,
	"./cs": 247,
	"./cs.js": 247,
	"./cv": 248,
	"./cv.js": 248,
	"./cy": 249,
	"./cy.js": 249,
	"./da": 250,
	"./da.js": 250,
	"./de": 251,
	"./de-at": 252,
	"./de-at.js": 252,
	"./de.js": 251,
	"./dv": 253,
	"./dv.js": 253,
	"./el": 254,
	"./el.js": 254,
	"./en-au": 255,
	"./en-au.js": 255,
	"./en-ca": 256,
	"./en-ca.js": 256,
	"./en-gb": 257,
	"./en-gb.js": 257,
	"./en-ie": 258,
	"./en-ie.js": 258,
	"./en-nz": 259,
	"./en-nz.js": 259,
	"./eo": 260,
	"./eo.js": 260,
	"./es": 261,
	"./es-do": 262,
	"./es-do.js": 262,
	"./es.js": 261,
	"./et": 263,
	"./et.js": 263,
	"./eu": 264,
	"./eu.js": 264,
	"./fa": 265,
	"./fa.js": 265,
	"./fi": 266,
	"./fi.js": 266,
	"./fo": 267,
	"./fo.js": 267,
	"./fr": 268,
	"./fr-ca": 269,
	"./fr-ca.js": 269,
	"./fr-ch": 270,
	"./fr-ch.js": 270,
	"./fr.js": 268,
	"./fy": 271,
	"./fy.js": 271,
	"./gd": 272,
	"./gd.js": 272,
	"./gl": 273,
	"./gl.js": 273,
	"./he": 274,
	"./he.js": 274,
	"./hi": 275,
	"./hi.js": 275,
	"./hr": 276,
	"./hr.js": 276,
	"./hu": 277,
	"./hu.js": 277,
	"./hy-am": 278,
	"./hy-am.js": 278,
	"./id": 279,
	"./id.js": 279,
	"./is": 280,
	"./is.js": 280,
	"./it": 281,
	"./it.js": 281,
	"./ja": 282,
	"./ja.js": 282,
	"./jv": 283,
	"./jv.js": 283,
	"./ka": 284,
	"./ka.js": 284,
	"./kk": 285,
	"./kk.js": 285,
	"./km": 286,
	"./km.js": 286,
	"./ko": 287,
	"./ko.js": 287,
	"./ky": 288,
	"./ky.js": 288,
	"./lb": 289,
	"./lb.js": 289,
	"./lo": 290,
	"./lo.js": 290,
	"./lt": 291,
	"./lt.js": 291,
	"./lv": 292,
	"./lv.js": 292,
	"./me": 293,
	"./me.js": 293,
	"./mi": 294,
	"./mi.js": 294,
	"./mk": 295,
	"./mk.js": 295,
	"./ml": 296,
	"./ml.js": 296,
	"./mr": 297,
	"./mr.js": 297,
	"./ms": 298,
	"./ms-my": 299,
	"./ms-my.js": 299,
	"./ms.js": 298,
	"./my": 300,
	"./my.js": 300,
	"./nb": 301,
	"./nb.js": 301,
	"./ne": 302,
	"./ne.js": 302,
	"./nl": 303,
	"./nl-be": 304,
	"./nl-be.js": 304,
	"./nl.js": 303,
	"./nn": 305,
	"./nn.js": 305,
	"./pa-in": 306,
	"./pa-in.js": 306,
	"./pl": 307,
	"./pl.js": 307,
	"./pt": 308,
	"./pt-br": 309,
	"./pt-br.js": 309,
	"./pt.js": 308,
	"./ro": 310,
	"./ro.js": 310,
	"./ru": 311,
	"./ru.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./uk": 332,
	"./uk.js": 332,
	"./uz": 333,
	"./uz.js": 333,
	"./vi": 334,
	"./vi.js": 334,
	"./x-pseudo": 335,
	"./x-pseudo.js": 335,
	"./yo": 336,
	"./yo.js": 336,
	"./zh-cn": 337,
	"./zh-cn.js": 337,
	"./zh-hk": 338,
	"./zh-hk.js": 338,
	"./zh-tw": 339,
	"./zh-tw.js": 339
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
webpackContext.id = 427;

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetsApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators_ts__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LetsApp = (function () {
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
    return LetsApp;
}());
LetsApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/app/app.html"*/'<ion-nav [ngClass]="{\'ionic-desktop-container\': isDesktop }" [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3__services_AuthService__["a" /* AuthService */]])
], LetsApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.
// Statics

// Operators






//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(17);
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


var FormBuilderComponent = (function () {
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
    return FormBuilderComponent;
}());
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

//# sourceMappingURL=formBuilder.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(372);
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





var FieldBuilderComponent = (function () {
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
    return FieldBuilderComponent;
}());
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

//# sourceMappingURL=fieldBuilder.js.map

/***/ }),

/***/ 469:
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


var UnixTimeToMoment = (function () {
    function UnixTimeToMoment() {
    }
    UnixTimeToMoment.prototype.transform = function (unixTime) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(parseInt(unixTime + "000")).format('DD/MM/YYYY');
    };
    return UnixTimeToMoment;
}());
UnixTimeToMoment = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'unixTimeToMoment' })
], UnixTimeToMoment);

//# sourceMappingURL=UnixTimeToMoment.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectKeys; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ObjectKeys = (function () {
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
    return ObjectKeys;
}());
ObjectKeys = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], ObjectKeys);

//# sourceMappingURL=ObjectKeys.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_OfferService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offerDetail_offerDetail__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addOffer_addOffer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_categories__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__memberDetail_memberDetail__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OffersPage = OffersPage_1 = (function () {
    function OffersPage(viewCtrl, navCtrl, navParams, loadingCtrl, 
        // private popoverCtrl: PopoverController,
        offerService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.offerService = offerService;
        this.alertService = alertService;
        this.canPost = false;
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
            this.myActions = this.navParams.data.myActions;
            this.currentUser = this.navParams.data.currentUser;
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
            _this.filters_action = {
                title: ('Show By Categories'),
                page: __WEBPACK_IMPORTED_MODULE_6__categories_categories__["a" /* CategoriesFilterPage */],
                params: {
                    categories: Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["map"])(_this.definitionOffer.POST.category.options, function (category, key) {
                        return { id: key, name: category };
                    }),
                    title: ('Offers'),
                    page: OffersPage_1
                }
            };
        }, function (error) { return _this.alertService.showError(error); });
        this.loadOffers();
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
    OffersPage.prototype.loadOffers = function () {
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
            if (!response.length) {
                _this.hasNoMoreData = true;
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
    OffersPage.prototype.setFilter = function (ev) {
        this.keywords = ev.target.value;
        if (this.keywords) {
            this.navCtrl.push(OffersPage_1, {
                filter: "&fragment=" + this.keywords,
                filterName: "'" + this.keywords + "'"
            });
        }
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
    OffersPage.prototype.goToFilters = function () {
        this.goToPage(this.filters_action);
    };
    return OffersPage;
}());
OffersPage = OffersPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-offers',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offers/offers.html"*/'<ion-header>\n  <ion-navbar>\n		<ion-title>{{ \'Offers\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n  <ion-toolbar>\n		<ion-buttons left>\n			<button ion-button icon-only (click)="goToFilters()">\n				<i class="ion-navicon-round"></i>\n			</button>\n		</ion-buttons>\n		<ion-searchbar (search)="setFilter($event)"></ion-searchbar>\n	</ion-toolbar>\n\n\n  <ion-list class="app-filters" *ngIf="filterName">\n    <ion-item>\n       {{ \'Offers found for\' | translate }} {{ filterName }}\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="app-items">\n\n    <ion-item *ngFor="let offer of offers">\n    <ion-row>\n\n      <ion-col col-4 (click)="showDetails(offer.id)" *ngIf="offer.image">\n        <ion-thumbnail>\n          <img [src]="offer.image">\n        </ion-thumbnail>\n      </ion-col>\n\n      <ion-col col-10 (click)="showDetails(offer.id)" *ngIf="!offer.image">\n        <h6>{{ offer.title }}</h6>\n        <div class="description" [innerHTML]="offer.description"></div>\n      </ion-col>\n\n      <ion-col col-6 (click)="showDetails(offer.id)" *ngIf="offer.image">\n        <h6>{{ offer.title }}</h6>\n        <div class="description" [innerHTML]="offer.description"></div>\n      </ion-col>\n\n      <ion-col col-2 class="items-user" (click)="showMember(offer.user_id)">\n        <p>\n          {{ offer.user_id_ref.name }}\n        </p>\n        <ion-avatar *ngIf="offer.user_id_ref.portrait">\n          <img [src]="offer.user_id_ref.portrait">\n        </ion-avatar>\n      </ion-col>\n\n    </ion-row>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offers/offers.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services_OfferService__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
], OffersPage);

var OffersPage_1;
//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(17);
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




var MemberService = (function () {
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
    return MemberService;
}());
MemberService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */],
        __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
], MemberService);

//# sourceMappingURL=MemberService.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_WantService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wantDetail_wantDetail__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addWant_addWant__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_categories__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_memberDetail_memberDetail__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WantsPage = WantsPage_1 = (function () {
    function WantsPage(viewCtrl, navCtrl, navParams, loadingCtrl, 
        // private popoverCtrl: PopoverController,
        wantService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.wantService = wantService;
        this.alertService = alertService;
        this.canPost = false;
    }
    WantsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
            this.myActions = this.navParams.data.myActions;
            this.currentUser = this.navParams.data.currentUser;
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
            _this.filters_action = {
                title: ('Show By Categories'),
                page: __WEBPACK_IMPORTED_MODULE_6__categories_categories__["a" /* CategoriesFilterPage */],
                params: {
                    categories: Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["map"])(_this.definitionWant.POST.category.options, function (category, key) {
                        return { id: key, name: category };
                    }),
                    title: ('Needs'),
                    page: WantsPage_1
                }
            };
        }, function (error) { return _this.alertService.showError(error); });
        this.loadWants();
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
    WantsPage.prototype.loadWants = function () {
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
    WantsPage.prototype.setFilter = function (ev) {
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
    return WantsPage;
}());
WantsPage = WantsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-wants',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wants/wants.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Needs\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-toolbar>\n		<ion-buttons left>\n			<button ion-button icon-only (click)="goToFilters()">\n				<i class="ion-navicon-round"></i>\n			</button>\n		</ion-buttons>\n		<ion-searchbar (search)="setFilter($event)"></ion-searchbar>\n	</ion-toolbar>\n\n  <ion-list class="app-filters" *ngIf="filterName">\n    <ion-item>\n      {{ \'Needs found for\' | translate }} {{ filterName }}\n    </ion-item>\n  </ion-list>\n  <ion-list class="app-items">\n\n    <ion-item *ngFor="let want of wants">\n\n      <ion-row>\n\n  <ion-col col-2 (click)="showMember(want.user_id.id)" *ngIf="want.image">\n    <ion-thumbnail>\n      <img [src]="want.image || \'assets/images/default_sm.jpg\'">\n    </ion-thumbnail>\n  </ion-col>\n\n  <ion-col col-10 (click)="showDetails(want.id)" *ngIf="!want.image">\n    <h6>{{ want.title }}</h6>\n    <div class="description" [innerHTML]="want.description"></div>\n  </ion-col>\n\n  <ion-col col-8 (click)="showDetails(want.id)" *ngIf="want.image">\n    <h6>{{ want.title }}</h6>\n    <div class="description" [innerHTML]="want.description"></div>\n  </ion-col>\n\n  <ion-col col-2 class="items-user" (click)="showMember(want.user_id)">\n    <p>\n      {{ want.user_id_ref.name }}\n    </p>\n    <ion-avatar *ngIf="want.user_id_ref.portrait">\n      <img [src]="want.user_id_ref.portrait">\n    </ion-avatar>\n  </ion-col>\n\n</ion-row>\n\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wants/wants.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services_WantService__["a" /* WantService */],
        __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
], WantsPage);

var WantsPage_1;
//# sourceMappingURL=wants.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_ConfigService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
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
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n  	<ion-title>{{ \'Welcome\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false">\n	<div class="page-login">\n		<ion-slides [pager]="true" [autoplay]="3000" [loop]="true">\n		  <ion-slide>\n				<div class="image-wrapper">\n					<div class="image">\n						<img src="assets/images/app_logo.png">\n						<h1 class="logo-title">{{ settings.APP_NAME }}</h1>\n					</div>\n				</div>\n		  </ion-slide>\n		  <ion-slide *ngIf="settings.COMMUNITY_NAME && settings.COMMUNITY_LOGO">\n				<div class="image-wrapper">\n					<div class="image">\n						<img src="{{ settings.COMMUNITY_LOGO }}">\n						<h1 class="logo-title">{{ settings.COMMUNITY_NAME }}</h1>\n					</div>\n				</div>\n		  </ion-slide>\n		</ion-slides>\n		<form [formGroup]="loginForm">\n			<ion-list>\n\n        <ion-item>\n			    <ion-label>\n			   		{{ \'URL\' | translate }}\n			   	</ion-label>\n			    <ion-input type="text" placeholder="https://" required formControlName="community_url"  (ionBlur)="setCommunityURL()"></ion-input>\n			  </ion-item>\n\n\n        <ion-item>\n			    <ion-label>\n			   		<i class="ion-person"></i>\n			   	</ion-label>\n			    <ion-input type="text" placeholder="Username" required formControlName="username"></ion-input>\n			  </ion-item>\n			  <ion-item class="form-error" *ngIf="formErrors.username">\n				  <p>{{ formErrors.username }}</p>\n			  </ion-item>\n\n			  <ion-item>\n			    <ion-label>\n			   		<i class="ion-locked"></i>\n			   	</ion-label>\n			    <ion-input type="password" placeholder="Password" required formControlName="password"></ion-input>\n			  </ion-item>\n\n			  <ion-item class="form-error" *ngIf="formErrors.password">\n				  <p>{{ formErrors.password }}</p>\n			  </ion-item>\n\n				<ion-item>\n				  <ion-label>{{ \'Remember me\' | translate }}</ion-label>\n				  <!-- <ion-checkbox checked="true" formControlName="rememberMe"></ion-checkbox> -->\n					<ion-toggle checked="true" formControlName="rememberMe"></ion-toggle>\n				</ion-item>\n\n				<ion-item>\n					<ion-label>\n						{{ \'Use in English\' | translate }}\n					</ion-label>\n					<ion-toggle [(ngModel)]="settings.APP_ENGLISH" [ngModelOptions]="{standalone: true}" (ionChange)="configService.initTranslate()"></ion-toggle>\n				</ion-item>\n\n			</ion-list>\n      <button ion-button full [disabled]="!loginForm.valid" (click)="doLogin()">{{ \'Sign in\' | translate }}</button>\n      <p>{{ settings.APP_NAME }} <span *ngIf="settings.APP_VERSION">{{settings.APP_VERSION}}</span></p>\n\n	  	<p *ngIf="settings.WEB_SITE_URL">\n	  		<a href="#" (click)="goToFullSite()" translate [translateParams]="{name: settings.COMMUNITY_NAME }">Visit the website</a>\n	  	</p>\n\n		</form>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/login/login.html"*/
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

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(17);
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




var OfferService = (function () {
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
    return OfferService;
}());
OfferService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */],
        __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
], OfferService);

//# sourceMappingURL=OfferService.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(17);
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




var WantService = (function () {
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
    return WantService;
}());
WantService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */],
        __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
], WantService);

//# sourceMappingURL=WantService.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_WantService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddWantPage = AddWantPage_1 = (function () {
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
    return AddWantPage;
}());
AddWantPage = AddWantPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-want',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addWant/addWant.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Add Need\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addWant()">{{ \'Submit\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addWant/addWant.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__services_WantService__["a" /* WantService */],
        __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
], AddWantPage);

var AddWantPage_1;
//# sourceMappingURL=addWant.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_OfferService__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_offers_offers__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddOfferPage = AddOfferPage_1 = (function () {
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
    return AddOfferPage;
}());
AddOfferPage = AddOfferPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-offer',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addOffer/addOffer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Add Offer\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addOffer()">{{ \'Submit\' | translate }}</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addOffer/addOffer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__services_OfferService__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
], AddOfferPage);

var AddOfferPage_1;
//# sourceMappingURL=addOffer.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(17);
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




var TransactionService = (function () {
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
    return TransactionService;
}());
TransactionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */],
        __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
], TransactionService);

//# sourceMappingURL=TransactionService.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map