import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import {StatusBar,Splashscreen} from 'ionic-native';

import {LoginPage} from "./pages/login/login";
import {AccountPage} from "./pages/account/account";
import {ContactAdminPage} from  "./pages/contact-admin/contact-admin";
import {HomePage} from "./pages/home/home";



@Component({
  templateUrl: 'build/app.html',
  //providers: [User]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private rootPage: any;
  private pages: Array<{title: string, component: any,iconName : string}>;

  constructor(private platform: Platform) {
    this.rootPage = LoginPage;
    this.initializeApp();
    this.generatePages();
  }

  generatePages(){
    this.pages = [
      { title: 'Home', component: HomePage,iconName :"home" },
      { title: 'Contact Admin', component: ContactAdminPage ,iconName :"call"},
      { title: 'My Account', component: AccountPage, iconName :"contact"}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.overlaysWebView(false);
      //StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logOut(){
    this.nav.setRoot(LoginPage);
    //this.user.getCurrentUser().then(user=>{
    //  user = JSON.parse(user);
    //  user.isLogin = false;
    //  this.user.setCurrentUser(user).then(user=>{
    //
    //  })
    //})
  }
}

ionicBootstrap(MyApp);
