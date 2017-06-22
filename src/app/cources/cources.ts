/**
 * Created by admin on 6/21/2017.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {CourcesHttpimpl} from './courcesHttpimpl';

@Component({
  moduleId: module.id,
  selector: 'json',
  templateUrl: './cources.html',
  styleUrls: ['./cources.css']
})

export class CourcesGetCall implements OnInit {
  courcesArray = [];

  constructor(private _courceshttp:CourcesHttpimpl) {

  }

    ngOnInit()
    {

      this._courceshttp.getEmp().subscribe(resEmp=>this.courcesArray = resEmp);

    }

  }



