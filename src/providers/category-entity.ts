import { Injectable } from '@angular/core';
import {HttpClient} from '../providers/http-client';

import {Observable} from 'rxjs/Rx';

/*
  Generated class for the CategoryEntity provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoryEntity {

  constructor(public httpClient : HttpClient) {

  }

  //@todo add url for server
  saveCategoryEntity(data){
    ////cat_id user_id title description
    let url = "save-category-entity";
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

  getCategoryEntitiesByCategoryIds(categoryIds){
    let url = "/get-category-entities";
    let self = this;
    let data = {
      categoryIds : categoryIds
    };
    return new Promise(function(resolve, reject) {
      self.httpClient.post(url,data).subscribe(response=>{
        resolve(self.getFormattedCategoryWithCategoryEntities(response.json()));
      },error=>{
        reject();
      });
    })
  }

  getFormattedCategoryWithCategoryEntities(categoryEntities){
    let formattedCategoryWithCategoryEntities = {};
    categoryEntities.forEach((categoryEntity:any)=>{
      if(!formattedCategoryWithCategoryEntities[categoryEntity.cat_id]){
        formattedCategoryWithCategoryEntities[categoryEntity.cat_id] = [];
      }
      formattedCategoryWithCategoryEntities[categoryEntity.cat_id].push(categoryEntity);
    });
    return formattedCategoryWithCategoryEntities;
  }

}
