import { Component } from '@angular/core';
import { ToastController,NavParams } from 'ionic-angular';
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
  public forum : any = {};
  public comment : string;
  public currentUser : any;
  public loadingData:boolean;
  public loadingMessages:any = [];

  constructor(private params: NavParams,private toastCtrl: ToastController,private user : User) {
    this.loadingData = false;
    this.user.getCurrentUser().then((user : any)=>{
      this.currentUser = user;
      this.loadingData = false;
      this.getForumData();
    });
  }

  ionViewDidLoad() {
    //console.log('Hello Forum Page');
  }

  getForumData(){
    //@todo loading comments from server
    this.forumGroupName = this.params.get('forumGroupName');
    this.forum = {};
    this.forum["id"]= this.params.get('forumId');
    this.forum["title"]=this.params.get('forumTitle');
    this.forum["poster"] = this.params.get('forumPoster');
    this.forum["postedDate"] = this.params.get('forumPostedDate');
    this.forum["comments"] = [];
    this.comment = "";
  }

  commentOnForum(){
    let comment = this.comment.trim();
    if(comment){
      this.forum.comments.push({
        comment : comment,
        commenter : this.currentUser.username
      });
    }
    this.comment = "";
  }

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
