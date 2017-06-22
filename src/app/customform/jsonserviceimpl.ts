/**
 * Created by admin on 6/19/2017.
 */
import { Component, OnInit } from '@angular/core';
import{Empservice} from './jsondataget';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: '<h2> Employee list</h2>' +
  '<ul *ngFor="let emp of employees">' +
  '<li>{{emp.title}}</li><li>{{emp.enabled}}</li></ul>'

})
export class Serviveimpl implements OnInit {

  employees=[];
  constructor(private _empservice:Empservice) {

  }

  ngOnInit() {

    this._empservice.getEmp().subscribe(resEmp=>this.employees=resEmp);
    console.log(JSON.stringify(this.employees));
  }

}
