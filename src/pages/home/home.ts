import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

import {Forum} from '../forum/forum';
import {User} from "../../providers/user";
import {HttpClient} from "../../providers/http-client";

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [User,HttpClient]
})
export class Home {

  public currentUser :any;

  public forumGroups : any = [];
  public currentForumGroup : string;


  constructor(private user : User,private httpClient : HttpClient,private navCtrl: NavController,private toastCtrl: ToastController) {
    this.user.getCurrentUser().then((user : any)=>{
      this.currentUser = user;
      this.getForumGroups();
    });

  }

  ionViewDidLoad() {
    //console.log('Hello Home Page');
  }

  getForumGroups(){

    let forum = [
      {
        id : "form_1",
        title : "BUSINESS HAS TAKE NEW TURN IN THIRD WORLD COUNTRY?",
        poster : 'Chambua',
        comments : [
          {
            comment : "It is just minor connection",
            commenter : "Joseph"
          },
          {
            comment : "Ofcoz this hii imekuwa ni topic kubwa sasa east africa……",
            commenter : "Leah"
          },
          {
            comment : "It is just minor connection",
            commenter : "Ester"
          },
          {
            comment : "It is done",
            commenter : "Joseph"
          }
        ]
      },
      {
        id : "form_2",
        title : "GOVERNMENT OF TANZANIA HAS BEEN ABLE TO MANAGE TO STABILIZE NATIONAL CURRENCY?",
        poster : 'Rosemary',
        comments : [
          {
            comment : "It is just minor connection",
            commenter : "Joseph"
          },
          {
            comment : "Nenda kasome makala iliyotolewa na BBC leo utapata majibu……..",
            commenter : "Joseph"
          }
        ]
      },
      {
        id : "form_3",
        title : "What is deflation and inflation affect African continent.. I need comment please",
        poster : 'Chingalo',
        comments : [
          {
            comment : "It is just minor connection",
            commenter : "Joseph"
          },
          {
            comment : "It is done",
            commenter : "Joseph"
          }
        ]
      }
    ];
    this.forumGroups = [];
    this.currentUser.categories.forEach((category:any)=>{
      this.forumGroups.push(
        {
          id : category.cat_id,
          name : category.cat_name,
          forums : forum
        }
      )
    });

    this.showSegment(this.forumGroups[0].id);
  }


  goToForum(forum,forumGroupName){
    let parameter = {
      forumGroupName : forumGroupName,
      forum : forum
    };
    this.navCtrl.push(Forum,parameter);
  }
  showSegment(currentGroupId){
    this.currentForumGroup = ""+currentGroupId;
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
