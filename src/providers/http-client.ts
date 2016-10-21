import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions,Response} from '@angular/http';
import   'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the HttpClient provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpClient {

  constructor(public http: Http) {
    console.log('Hello HttpClient Provider');
  }
  get(url,user):Observable<Response>{
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' +
      btoa(user.username + ':' + user.password));
    return this.http.get(user.serverUrl + url, {headers: headers});
  }

  post(url, data, user):Observable<Response> {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' +
      btoa(user.username + ':' + user.password));
    return this.http.post(user.serverUrl + url, data, {headers: headers});
  }

}
