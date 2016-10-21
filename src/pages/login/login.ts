import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import {Home} from "../home/home";
import {User} from "../../providers/user";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : [User]
})
export class Login {

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  public data : any = {};
  public loadingData: boolean;
  public loadingMessages : any = [];

  constructor(private navCtrl: NavController,private toastCtrl: ToastController,private user : User) {
    this.loadingData = false;
    this.data.setUpTitle = "Forum App";
    this.data.setUpShortDescription = "Easiest way to get help";
  }


  loginToServer(){
    this.user.setCurrentUser({name:"joseph chingalo"}).then(()=>{
      console.log('success set');
      this.user.getCurrentUser().then((user)=>{
        console.log(user);
      });
    });
    //this.navCtrl.setRoot(Home);
  }

  signUp(){
    //this.navCtrl.push(SignUp);
    this.setToasterMessage('Sign up for new account coming soon');
  }

  forgetPassword(){
    this.setToasterMessage('forget password coming soon');
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
