import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';


import {HomePage} from "../home/home";

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  private data : any = {};
  private loadingData: boolean;
  private loadingMessages : any = [];

  constructor(private navCtrl: NavController,private toastCtrl: ToastController) {
    this.loadingData = false;
    this.data.setUpTitle = "Forum App";
    this.data.setUpShortDescription = "Easiest way to get help";
  }


  loginToServer(){
    this.navCtrl.setRoot(HomePage);
  }

  setLoadingMessages(message){
    this.loadingMessages.push(message);
  }

  setToasterMessage(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  setStickToasterMessage(message){
    let toast = this.toastCtrl.create({
      message: message,
      showCloseButton : true
    });
    toast.present();
  }

}
