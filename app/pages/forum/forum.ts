import { Component } from '@angular/core';
import { NavController,ToastController,NavParams } from 'ionic-angular';

/*
  Generated class for the ForumPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/forum/forum.html',
})
export class ForumPage {

  private forumGroupName : string;
  private forum : any;

  constructor(private navCtrl: NavController,private params: NavParams,private toastCtrl: ToastController) {
    this.getForumData();
  }

  getForumData(){
    this.forumGroupName = this.params.get('forumGroupName');
    this.forum = this.params.get('forum');
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
