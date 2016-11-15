import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Home} from "../pages/home/home";
import { ContactAdmin } from "../pages/contact-admin/contact-admin";
import { Account } from "../pages/account/account";
import {Forum} from "../pages/forum/forum";
import {SignUp} from "../pages/sign-up/sign-up";
import {Doctor} from "../pages/doctor/doctor";
import {Councelling} from "../pages/councelling/councelling";
import {Adverts} from "../pages/adverts/adverts"
import {ForgetPassword} from "../pages/forget-password/forget-password";

@NgModule({
  declarations: [
    MyApp,
    Login,
    Home,Councelling,
    ContactAdmin,Doctor,
    Account,
    Forum,Adverts,
    SignUp,ForgetPassword
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Home,Councelling,
    ContactAdmin,Doctor,
    Account,
    Forum,Adverts,
    SignUp,ForgetPassword
  ],
  providers: [Storage]
})
export class AppModule {}
