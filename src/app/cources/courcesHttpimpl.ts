/**
 * Created by admin on 6/21/2017.
 */
/**
 * Created by admin on 6/19/2017.
 */
import {Injectable} from '@angular/core';
import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

/*import 'rxjs';*/
import 'rxjs/add/operator/map';

@Injectable()
export class CourcesHttpimpl{
  constructor(private _http:Http) {}

  private _productURL:any = "./assets/cources.json";
  getEmp(): Observable<any>{

    return this._http.get(this._productURL).map((response : Response) => response.json());
  }
}
