import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,private user: User) {
    this.setKeyTransformerMapper();
    this.user.getCurrentUser().then((user:any)=> {
      if (user.username) {
        this.currentUser = user;
        this.userAccountDetails = [];
        this.setUserAccountDetails();
      }
    });
  }

  setKeyTransformerMapper(){
    this.keyTransformerMapper = {
      "fullName":"Full Name",
      "last_name":"Full Name",
      "username":"Username",
      "email":"E-mail",
      "mobileNumber":"Mobile Number",
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

}
