import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Home} from "../pages/home/home";
import { ContactAdmin } from "../pages/contact-admin/contact-admin";
import { Account } from "../pages/account/account";
import {Forum} from "../pages/forum/forum";

@NgModule({
  declarations: [
    MyApp,
    Login,
    Home,
    ContactAdmin,
    Account,
    Forum
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Home,
    ContactAdmin,
    Account,
    Forum
  ],
  providers: []
})
export class AppModule {}
