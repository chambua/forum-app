import { Component } from '@angular/core';
declare var window;
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
      name : "GEMA",
      number : "+255755254758"
    });
    this.contacts.push({
      name : "MAMBO ",
      number : "+255743549634"
    });
  }

  callContact(number){
    window.location = "tel:" +number;
  }

}
