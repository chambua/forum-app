import { Component } from '@angular/core';
declare var window;
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

  public contacts : any;
  constructor() {
    this.setContacts();
  }

  setContacts(){
    this.contacts = [
      //{key : "Name",value : "Chambua"},
      {key : "E-mail",value : "sales@evc.co.tz"},
      {key : "Mobile Number",value : "0225500135"}
    ];
  }

  ionViewDidLoad() {
    //console.log('Hello ContactAdmin Page');
  }

  callContact(number){
    window.location = "tel:" +number;
  }

}
