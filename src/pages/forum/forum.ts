import { Component } from '@angular/core';
import { NavController,ToastController,NavParams } from 'ionic-angular';
import {User} from "../../providers/user";

/*
  Generated class for the Forum page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
  providers : [User]
})
export class Forum {

  public forumGroupName : string;
  public forum : any;
  public comment : string;
  public currentUser : any;

  constructor(private navCtrl: NavController,private params: NavParams,private toastCtrl: ToastController,private user : User) {
    this.getForumData();
    this.setCurrentUser();
  }

  ionViewDidLoad() {
    //console.log('Hello Forum Page');
  }

  setCurrentUser(){
    this.user.getCurrentUser().then((user:any)=> {
      if (user.username) {
        this.currentUser = user;
      }
    });
  }

  getForumData(){
    this.forumGroupName = this.params.get('forumGroupName');
    this.forum = this.params.get('forum');
    this.comment = "";
  }

  commentOnForum(){
    let comment = this.comment.trim();
    if(comment){
      this.forum.comments.push({
        comment : comment,
        commenter : this.currentUser.fullName
      });
    }
    this.comment = "";
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
