import { Injectable } from '@angular/core';
import { SQLite} from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  Generated class for the SqlLite provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SqlLite {
  private dataBaseStructure: any= {
    dataElementGroupSets : {
      columns : [
        {value: 'id', type: 'TEXT'},
        {value: 'description',type:'LONGTEXT'}
      ],

    }
  };

  constructor() {
  }


}
