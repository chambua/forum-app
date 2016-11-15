import { Component } from '@angular/core';
import {HttpClient} from "../../providers/http-client";
import { ToastController,NavParams } from 'ionic-angular';
import {User} from "../../providers/user";
import {Comment} from "../../providers/comment";

/*
  Generated class for the Forum page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
  providers : [User,Comment,HttpClient]
})
export class Forum {

  public forumGroupName : string;
  public forum : any = {};
  public comment : string;
  public currentUser : any;
  public loadingData:boolean;
  public loadingMessages:any = [];
  public isAppSendingComment : boolean;

  constructor(private params: NavParams,private toastCtrl: ToastController,private user : User,private Comment:Comment,private httpClient:HttpClient) {
    this.loadingData = false;
    this.isAppSendingComment = false;
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
    this.loadingData = true;
    this.loadingMessages = [];
    this.setLoadingMessages('Set up topic information');
    this.forumGroupName = this.params.get('forumGroupName');
    this.forum = {};
    this.forum["id"]= this.params.get('forumId');
    this.forum["title"]=this.params.get('forumTitle');
    this.forum["description"] = this.params.get('forumDescription');
    this.forum["poster"] = this.params.get('forumPoster');
    this.forum["postedDate"] = this.params.get('forumPostedDate');
    this.comment = "";
    this.forum["comments"] = [];
    this.loadingComments(this.forum["id"]);
  }

  loadingComments(categoryEntityId){
    this.setLoadingMessages('Loading comments');
    this.Comment.getAllComments(categoryEntityId).then((comments:any)=>{
      comments.forEach((comment:any)=>{
        this.forum["comments"].push(comment);
      });
      this.loadingData = false;
    },error=>{
      this.loadingData = false;
      this.setToasterMessage('Fail to load comments');
    })
  }

  commentOnForum(){
    let comment = this.comment.trim();
    if(comment){
      this.isAppSendingComment = true;
      let data = {
        eid : this.forum["id"],
        user_id : this.currentUser.user_id,
        description : comment
      };
      this.Comment.saveComment(data).then(()=>{
        this.forum.comments.push({
          comment_id : "",
          description : comment,
          full_name : this.currentUser.full_name,
          posted_date : new Date().toJSON().slice(0,10)
        });
        this.isAppSendingComment = false;
      },error=>{
        this.isAppSendingComment = false;
        this.setToasterMessage("Fail to save comment");
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
