import { Component } from '@angular/core';
import { NavController ,ToastController} from 'ionic-angular';
import {User} from "../../providers/user";
import {Home} from "../home/home";

/*
 Generated class for the SignUp page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
  providers : [User]
})
export class SignUp {

  public loadingData: boolean;
  public loadingMessages : any = [];
  public data:any = {};
  public mandatoryFields : any;

  constructor(public navCtrl:NavController,private toastCtrl: ToastController,private user : User) {
    this.loadingData = false;
    this.mandatoryFields = [
      {name : "full name",key : "fullName"},
      {name : "username",key : "username"},
      {name : "password",key : "password"}
    ];
  }

  ionViewDidLoad() {
    //console.log('Hello SignUp Page');
  }

  registerAccount() {
    if(this.isAllMandatoryFieldsEntered()){
      this.data.isLogin = true;
      this.user.setCurrentUser(this.data).then(()=>{
        this.setToasterMessage('Account has been saved successfully');
        this.navCtrl.setRoot(Home);
      });
    }

  }

  isAllMandatoryFieldsEntered(){
    let result = true;
    for(let mandatoryField of this.mandatoryFields){
      let key = mandatoryField.key;
      if(!this.data[key]){
        this.data[key] = "";
        this.setToasterMessage('Please enter '+mandatoryField.name);
        return false;
      }else if(!this.data[key].trim()){
        this.data[key] = "";
        this.setToasterMessage('Please enter '+mandatoryField.name);
        return false;
      }
    }
    return result;
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
