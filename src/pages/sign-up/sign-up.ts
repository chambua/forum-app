import { Component } from '@angular/core';
import { NavController ,ToastController} from 'ionic-angular';
import {User} from "../../providers/user";
import {Home} from "../home/home";
import {HttpClient} from "../../providers/http-client";

/*
 Generated class for the SignUp page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
  providers : [User,HttpClient]
})
export class SignUp {

  public loadingData: boolean;
  public loadingMessages : any = [];
  public data:any = {};
  public mandatoryFields : any;
  public selectedCategories : any;
  public categories : any;

  constructor(public navCtrl:NavController,private toastCtrl: ToastController,private user : User,private httpClient:HttpClient) {
    this.loadingData = false;
    this.mandatoryFields = [
      {name : "full name",key : "fullName"},
      {name : "username",key : "username"},
      {name : "password",key : "password"}
    ];
    this.selectedCategories = [];
    this.getAllCategories();
  }

  getAllCategories(){
    this.loadingData = true;
    this.loadingMessages = [];
    this.setLoadingMessages('Fetching categories from the server');
    let url = "/get-categories";
    this.httpClient.get(url).subscribe((response)=>{
      response = response.json();
      this.categories = response;
      this.loadingData = false;
    },error=>{
      this.setToasterMessage("Fail to get categories from server");
    });
  }

  ionViewDidLoad() {

  }

  registerAccount() {
    if(this.isAllMandatoryFieldsEntered() && this.selectedCategories.length > 0){
      let url = "/register";
      this.httpClient.post(url,this.data).subscribe((response)=>{
        response = response.json();
        this.setUserData(response);
      },error=>{
        alert(JSON.stringify(error));
        this.setToasterMessage("Fail to register account");
      });
    }
  }

  setUserData(response){
    this.loadingData = false;
    this.setToasterMessage(response.message);
    if(response.status == 1){
      //todo save categories  to database
      this.data.categories = this.getAllCategories();
      this.data.isLogin = true;
      this.user.setCurrentUser(this.data).then(()=>{
        this.navCtrl.setRoot(Home);
      });
    }
  }

  getUserCategories(){
    let categories = [];
    this.categories.forEach((category:any)=>{
      if(this.selectedCategories.indexOf(category.cat_id) != -1){
        categories.push(category);
      }
    });
    return categories;
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
