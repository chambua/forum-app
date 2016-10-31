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

  public baseUrl :string;

  constructor(public http: Http) {
    this.baseUrl = "http://10.42.0.1/forum/index.php";
    //console.log('Hello HttpClient Provider');
  }
  get(url):Observable<Response>{
    return this.http.get(this.baseUrl + url);
  }

  post(url, data ):Observable<Response> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
    });
    return this.http.post(this.baseUrl + url, {data:data}, {headers:headers});
  }

}
