import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Adverts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adverts',
  templateUrl: 'adverts.html'
})
export class Adverts {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Adverts Page');
  }

}
