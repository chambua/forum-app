import { Component } from '@angular/core';
import { NavController ,ToastController} from 'ionic-angular';
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

  constructor(private toastCtrl: ToastController,private navCtrl : NavController) {
    this.data = {};
  }

  ionViewDidLoad() {
  }

  verifyCode(){
    if(this.data.email){
      if(this.data.code){
        //decode code :: atob
        if(btoa(this.data.email) == this.data.code){
          alert('yes it is ready to update password');
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
      //encode
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
    alert(JSON.stringify(data));
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
