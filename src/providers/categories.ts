import { Injectable } from '@angular/core';

import {HttpClient} from '../providers/http-client';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the Categories provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Categories {

  constructor(private httpClient: HttpClient) {
  }

  getAllCategories(){
    let self = this;
    let url = "/get-categories";
    return new Promise(function(resolve, reject) {
      self.httpClient.get(url).subscribe((response)=>{
        response = response.json();
        resolve(response);
      },error=>{
        reject();
      });
    })
  }

  addUserCategories(selectedCategories,user_id){
    let self = this;
    let url = "/add-user-categories";
    return new Promise(function(resolve, reject) {

      selectedCategories.forEach(selectedCategory=>{
        let data = {
          user_id : user_id,
          cat_id : selectedCategory
        };
        self.httpClient.post(url,data).subscribe(()=>{
        },error=>{
        })
      });
      resolve();
    })
  }

  getUserCategories(currentUser){
    let url = '/get-user-categories';
    let self = this;
    return new Promise(function(resolve, reject) {
      self.httpClient.post(url,currentUser).subscribe(response=>{
        resolve(response.json())
      },error=>{
        reject();
      })
    });
  }


}
