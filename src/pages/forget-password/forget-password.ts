import { Component } from '@angular/core';
import { NavController ,ToastController} from 'ionic-angular';
import {User} from "../../providers/user";
import {ResetPassword} from "../reset-password/reset-password";
/*
  Generated class for the ForgetPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html'
})
export class ForgetPassword {

  public data : any;
  public loadingData:boolean;
  public loadingMessages:any = [];

  constructor(private toastCtrl: ToastController,private navCtrl : NavController,private user : User) {
    this.data = {};
  }

  ionViewDidLoad() {
  }

  verifyCode(){
    if(this.data.email){
      if(this.data.code){
        if(btoa(this.data.email) == this.data.code){
          let parameter = {
            email : this.data.email
          };
          this.navCtrl.push(ResetPassword,parameter);
        }else{
          this.setToasterMessage('You have entered incorrect code, please press send code button');
        }
      }else{
        this.setToasterMessage('Please enter code,you have received your e-mail');
      }
    }else{
      this.setToasterMessage('Please enter your e-mail');
    }
  }

  resendVerificationCode(){
    if(this.data.email){
      this.data.code = btoa(this.data.email);
      this.sendEmail();
    }else{
      this.setToasterMessage('Please enter your e-mail');
    }
  }

  sendEmail(){
    var data = {
      email : this.data.email,
      code : this.data.code
    };
    this.user.sendChangePasswordVerificationCode(data).then((response:any)=>{
      if(response.status == 200|| response.status == "200"){
        this.setToasterMessage('Verification code has been sent to your email');
        this.navCtrl.pop();
      }else{
        this.setToasterMessage('Fail to send verification code, please try again later');
      }
    },error=>{
      this.setToasterMessage('Fail to send verification code, please try again later');
    });
  };

  setLoadingMessages(message) {
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
