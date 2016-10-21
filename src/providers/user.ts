import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {


  constructor(private http: Http, private storage : Storage) {
  }

  setCurrentUser(user){
    let self = this;
    return  new Promise(function(resolve,reject){
      user = JSON.stringify(user);
      self.storage.set('user', user).then(() => {
        resolve();
      },error=>{
        reject();
      });
    });
  }

  getCurrentUser(){
    let self = this;
    return  new Promise(function(resolve,reject){
      self.storage.get('user').then(user=>{
        user = JSON.parse(user);
        resolve(user);
      },err=>{
        reject();
      })
    })
  }

}
