import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Login } from '../pages/login/login';
import { Home} from "../pages/home/home";
import { ContactAdmin } from "../pages/contact-admin/contact-admin";
import { Account } from "../pages/account/account";
import {User} from "../providers/user";


@Component({
  templateUrl: 'app.html',
  providers : [User]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any;
  public pages: Array<{title: string, component: any,iconName : string}>;

  constructor(private platform: Platform,private user: User) {
    this.rootPage = Login;
    this.initializeApp();
    this.generatePages();
  }

  generatePages(){
    this.pages = [
      { title: 'Home', component: Home,iconName :"home" },
      { title: 'Contact Admin', component: ContactAdmin ,iconName :"call"},
      { title: 'My Account', component: Account, iconName :"contact"}
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
    this.user.getCurrentUser().then((user:any)=> {
      user.isLogin = false;
      this.user.setCurrentUser(user).then(()=>{
        this.nav.setRoot(Login);
      });
    });

  }
}
