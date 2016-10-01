import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  private forumGroups : any = [];
  private currentForumGroup : string;


  constructor(private navCtrl: NavController,private toastCtrl: ToastController) {
    this.getForumGroups();
  }

  getForumGroups(){
    this.setToasterMessage('Hello, ready to generate forum groups');
    this.forumGroups.push({
      id : 1,
      name : 'Business',
      forums : [
        {
          id : "form_1",
          title : "title One",
          poster : 'Chingalo',
          comments : [
            {
              comment : "It is just minor connection",
              commenter : "Joseph"
            },
            {
              comment : "It is just minor connection",
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
          title : "title Two",
          poster : 'Rosemary',
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
      ]
    });
    this.forumGroups.push({
      id : 2,
      name : 'Information Tech',
      forums : [
        {
          id : "form_21",
          title : "title One",
          poster : 'Philibert',
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
        },
        {
          id : "form_22",
          title : "title two",
          poster : 'Leah',
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
      ]
    });
    this.forumGroups.push({
      id : 3,
      name : 'Social',
      forums : [
        {
          id : "form_31",
          title : "title One",
          poster : 'Leah',
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
        },
        {
          id : "form_32",
          title : "title two",
          poster : 'Leah',
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
      ]
    });

    this.showSegment(this.forumGroups[0].id);
  }


  goToForum(forum,forumGroupName){
    alert(forumGroupName);
    alert(JSON.stringify(forum));
  }
  showSegment(currentGroupId){
    this.currentForumGroup = currentGroupId;
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
