import { Component } from '@angular/core';
import { NavController,ToastController,AlertController } from 'ionic-angular';

import {Forum} from '../forum/forum';
import {User} from "../../providers/user";
import {HttpClient} from "../../providers/http-client";
import {CategoryEntity} from "../../providers/category-entity";

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [User,HttpClient,CategoryEntity]
})
export class Home {

  public currentUser :any;

  public forumGroups : any = [];
  public currentForumGroup : string;
  public loadingData:boolean;
  public loadingMessages:any = [];


  constructor(private alertCtrl: AlertController,private categoryEntity:CategoryEntity,private user : User,private httpClient : HttpClient,private navCtrl: NavController,private toastCtrl: ToastController) {
    this.loadingData = false;
    this.currentForumGroup = "";
    this.user.getCurrentUser().then((user : any)=>{
      this.currentUser = user;
      this.loadingData = false;
      this.getCategoryEntities();
    });

  }

  ionViewDidLoad() {
    this.loadingMessages = [];
  }

  getCategoryEntities(){
    this.loadingData = true;
    this.setLoadingMessages('Loading topics on subscribed categories');
    var categoryIds = [];
    this.currentUser.categories.forEach((category:any)=>{
      categoryIds.push(category.cat_id);
    });
    this.categoryEntity.getCategoryEntitiesByCategoryIds(categoryIds).then((categoryEntities : any)=>{
      this.forumGroups = [];
      this.currentUser.categories.forEach((category:any)=>{
        this.forumGroups.push(
          {
            id : category.cat_id,
            name : category.cat_name,
            forums : categoryEntities[category.cat_id]?categoryEntities[category.cat_id] : []
          }
        )
      });
      this.loadingData = false;
      if(this.currentForumGroup ==""){
        this.showSegment(this.forumGroups[0].id);
      }
    },error=>{
      this.loadingData = false;
      this.setToasterMessage("Fail to load topics on subscribed categories");
    });
  }

  goToForum(forum,forumGroupName){
    let parameter = {
      forumGroupName : forumGroupName,
      forumPoster : forum.poster,
      forumTitle : forum.title,
      "forumDescription" : forum.description,
      forumPostedDate : forum.posted_date,
      forumId : forum.id
    };
    this.navCtrl.push(Forum,parameter);
  }

  addNewTopic(){
    let alert = this.alertCtrl.create({
      title: 'New topic',
      inputs: [
        {
          name: 'title',
          placeholder: 'Topic Title'
        },
        {
          name: 'description',
          placeholder: 'Topic Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Add',
          handler: data => {
            if (data.title && data.description) {
              this.saveNewTopic(data);
            } else {
              this.setToasterMessage('Please enter title and description');
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }


  saveNewTopic(data) {
    let postData = {
      cat_id : this.currentForumGroup,
      user_id : this.currentUser.user_id,
      title : data.title,
      description : data.description
    };
    this.loadingData = true;
    this.loadingMessages = [];
    this.setLoadingMessages('Please wait, while saving new topic');
    this.categoryEntity.saveCategoryEntity(postData).then(()=>{
      this.getCategoryEntities();
    },error=>{
      this.loadingData = false;
    });
  }


  showSegment(currentGroupId){
    this.currentForumGroup = ""+currentGroupId;
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
