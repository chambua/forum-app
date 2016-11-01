import { Component } from '@angular/core';

/*
  Generated class for the Councelling page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-councelling',
  templateUrl: 'councelling.html'
})
export class Councelling {

  public contacts : any;

  constructor() {
    this.contacts = [];
    this.generateContacts();
  }

  ionViewDidLoad() {
    //console.log('Hello Councelling Page');
  }

  generateContacts(){
    this.contacts.push({
      name : "Joel Joseph",
      number : "+255 687 564 567"
    });
    this.contacts.push({
      name : "Joseph Joel",
      number : "+255 787 564 567"
    });
    this.contacts.push({
      name : "Charles Jacob",
      number : "+255 587 564 567"
    });
  }

}
