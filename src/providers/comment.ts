import { Injectable } from '@angular/core';
import {HttpClient} from '../providers/http-client';

import {Observable} from 'rxjs/Rx';

/*
  Generated class for the Comment provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Comment {

  constructor(public httpClient : HttpClient) {
  }

  //@todo add url for server
  getAllComents(categoryEntityId){
    let url = "" + "/"+categoryEntityId;
    let self = this;
    return new Promise(function(resolve, reject) {
      return new Promise(function(resolve, reject) {
        self.httpClient.get(url).subscribe(response=>{
          resolve(response.json());
        },error=>{
          reject();
        });
      })
    });
  }

  saveComment(data){
    let url = "";
    let self = this;
    return new Promise(function(resolve, reject) {
      return new Promise(function(resolve, reject) {
        self.httpClient.post(url,data).subscribe(response=>{
          resolve(response.json());
        },error=>{
          reject();
        });
      })
    });
  }

}
