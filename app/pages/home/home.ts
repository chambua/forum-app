import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

import {ForumPage} from '../forum/forum';

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
    this.setToasterMessage('Hello, forum groups has been populated');
    this.forumGroups.push({
      id : 1,
      name : 'Business',
      forums : [
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
            },
            {
              comment : "Nenda kasome makala iliyotolewa na BBC leo utapata majibu……..",
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
          title : "IFM ,WORLD BANK has banned to give fund to Zimbabwe ? Due to Mugabe insults …weka comment yako..",
          poster : 'Leah',
          comments : [
            {
              comment : "It is just minor connection",
              commenter : "Joseph"
            },
            {
              comment : "It is done",
              commenter : "Joseph"
            },
            {
              comment : "Nenda kasome makala iliyotolewa na BBC leo utapata majibu……..",
              commenter : "Joseph"
            },
            {
              comment : "It is awesome",
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
    let parameter = {
      forumGroupName : forumGroupName,
      forum : forum
    };
    this.navCtrl.push(ForumPage,parameter);
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
