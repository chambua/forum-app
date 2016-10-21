import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ContactAdmin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact-admin',
  templateUrl: 'contact-admin.html'
})
export class ContactAdmin {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContactAdmin Page');
  }

}
