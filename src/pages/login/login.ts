import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import {Home} from "../home/home";
import {User} from "../../providers/user";
import {SignUp} from "../sign-up/sign-up";
import {HttpClient} from "../../providers/http-client";
import {Categories} from "../../providers/categories";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [User,HttpClient,Categories]
})
export class Login {

  public data:any = {};
  public loadingData:boolean;
  public loadingMessages:any = [];
  public currentUser:any;
  public mandatoryFields:any;

  constructor(private categories : Categories,private navCtrl:NavController, private toastCtrl:ToastController, private user:User,private httpClient : HttpClient) {
    this.loadingData = false;
    this.data.setUpTitle = "University Intellectual Network";
    this.data.logoUrl = "assets/img/logo.png";
    this.data.setUpShortDescription = "Easiest way to get help";
    this.mandatoryFields = [
      {name: "username", key: "username"},
      {name: "password", key: "password"}
    ];
    this.setCurrentUser();
  }

  setCurrentUser(){
    this.user.getCurrentUser().then((user:any)=> {
      if (user) {
        if(user.username){
          this.currentUser = user;
          this.reAuthenticateUser();
        }
      }else{
        this.currentUser = {};
      }
    });
  }

  reAuthenticateUser() {
    if (this.currentUser.isLogin) {
      this.navCtrl.setRoot(Home);
    }
  }

 loginToServer() {
    if (this.isAllMandatoryFieldsEntered()) {
      let url = "/authenticate";
      this.loadingData = true;
      this.loadingMessages = [];
      this.setLoadingMessages('Please wait ...');
      this.httpClient.post(url,this.data).subscribe(response=>{
        response = response.json();
        if(response){
          this.currentUser = response;
          this.currentUser.isLogin = true;
          this.setLoadingMessages('Loading user subscriptions');
          this.categories.getUserCategories(this.currentUser).then((categories:any)=>{
            this.currentUser.categories = categories;
            this.user.setCurrentUser(this.currentUser).then(()=> {
              this.loadingData = false;
              this.navCtrl.setRoot(Home);
            })
          },error=>{
            this.loadingData = false;
            this.setToasterMessage('Fail to get user subscriptions');
          });
        }else{
          this.loadingData = false;
          this.setToasterMessage('Please check your username and password');
        }

      },error=>{
        this.loadingData = false;
        this.setToasterMessage('Fail to connect to the server');
      })
    }
  }


  isUserAccountAvailable() {
    let isUserAccountAvailable = true;
    if (this.data.username != this.currentUser.username) {
      this.setToasterMessage('Currently you have not registered, please sign up first');
      return false;
    }else if (this.data.password != this.currentUser.password) {
      this.setStickToasterMessage('You have entered wrong password');
      return false;
    }
    return isUserAccountAvailable;
  }

  isAllMandatoryFieldsEntered() {
    let result = true;
    for (let mandatoryField of this.mandatoryFields) {
      let key = mandatoryField.key;
      if (!this.data[key]) {
        this.data[key] = "";
        this.setToasterMessage('Please enter ' + mandatoryField.name);
        return false;
      } else if (!this.data[key].trim()) {
        this.data[key] = "";
        this.setToasterMessage('Please enter ' + mandatoryField.name);
        return false;
      }
    }
    return result;
  }

  signUp() {
    this.navCtrl.push(SignUp);
  }

  forgetPassword() {
    this.setToasterMessage('forget password coming soon');
  }

  setLoadingMessages(message) {
    this.loadingMessages.push(message);
  }

  setToasterMessage(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  setStickToasterMessage(message) {
    let toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true
    });
    toast.present();
  }

}
