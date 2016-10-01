var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var login_1 = require("./pages/login/login");
var account_1 = require("./pages/account/account");
var contact_admin_1 = require("./pages/contact-admin/contact-admin");
var home_1 = require("./pages/home/home");
var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = login_1.LoginPage;
        this.initializeApp();
        this.generatePages();
    }
    MyApp.prototype.generatePages = function () {
        this.pages = [
            { title: 'Home', component: home_1.HomePage, iconName: "home" },
            { title: 'Contact Admin', component: contact_admin_1.ContactAdminPage, iconName: "call" },
            { title: 'My Account', component: account_1.AccountPage, iconName: "contact" }
        ];
    };
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            ionic_native_1.StatusBar.overlaysWebView(false);
            //StatusBar.styleDefault();
            ionic_native_1.Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        this.nav.setRoot(login_1.LoginPage);
        //this.user.getCurrentUser().then(user=>{
        //  user = JSON.parse(user);
        //  user.isLogin = false;
        //  this.user.setCurrentUser(user).then(user=>{
        //
        //  })
        //})
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'build/app.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
ionic_angular_1.ionicBootstrap(MyApp);
