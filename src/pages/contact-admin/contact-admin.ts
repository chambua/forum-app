import { Component } from '@angular/core';

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
      {key : "Name",value : "Chambua"},
      {key : "E-mail",value : "intelsoftafrica@info.co.tz"},
      {key : "Mobile Number",value : "+255 717 873 646"}
    ];
  }

  ionViewDidLoad() {
    //console.log('Hello ContactAdmin Page');
  }

}
