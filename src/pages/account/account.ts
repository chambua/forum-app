import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import {User} from "../../providers/user";

/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  providers : [User]
})
export class Account {

  public currentUser:any;
  public keyTransformerMapper : any;
  public userAccountDetails : any;
  public loadingData: boolean;
  public loadingMessages : any = [];

  constructor(public navCtrl: NavController,private user: User,private toastCtrl: ToastController) {
    this.setKeyTransformerMapper();
    this.user.getCurrentUser().then((user:any)=> {
      if (user.username) {
        this.currentUser = user;
        this.userAccountDetails = [];
        this.setUserAccountDetails();
      }
    });
  }

  uploadCv(){
    this.setToasterMessage('Coming soon!');
  }

  setKeyTransformerMapper(){
    this.keyTransformerMapper = {
      "fullName":"Full Name",
      "full_name":"Full Name",
      "username":"Username",
      "email":"E-mail",
      "mobileNumber":"Mobile Number",
      "phone_number":"Mobile Number",
    }
  }

  setUserAccountDetails(){
    for(let key in this.currentUser){
      if(this.keyTransformerMapper[key]){
        this.userAccountDetails.push({
          label : this.keyTransformerMapper[key],
          value : this.currentUser[key]
        });
      }
    }
  }

  ionViewDidLoad() {
    //console.log('Hello Account Page');
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
