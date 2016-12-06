import { Injectable } from '@angular/core';
import {HttpClient} from '../providers/http-client';
import { Http ,Headers,RequestOptions,Response} from '@angular/http';
import   'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {


  constructor(private storage : Storage,public http : Http,public httpClient:HttpClient) {
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

  sendChangePasswordVerificationCode(data){
    let self = this;
    return  new Promise(function(resolve,reject){
      self.httpClient.post("/forget-password-verification-code",data).subscribe(response=>{
        resolve(response.json());
      },error=>{
        reject(error.json());
      })
    });
  }

}
