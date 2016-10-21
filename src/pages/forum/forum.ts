import { Component } from '@angular/core';
import { NavController,ToastController,NavParams } from 'ionic-angular';

/*
  Generated class for the Forum page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html'
})
export class Forum {

  private forumGroupName : string;
  private forum : any;
  private comment : string;

  constructor(private navCtrl: NavController,private params: NavParams,private toastCtrl: ToastController) {
    this.getForumData();
  }

  ionViewDidLoad() {
    console.log('Hello Forum Page');
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
        commenter : 'commenter'
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
