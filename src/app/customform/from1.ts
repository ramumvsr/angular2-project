/**
 * Created by admin on 6/19/2017.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: `./form1.html`,
  styleUrls: ['./jsonform.css']
})
export class Form1 implements OnInit {
  public myForm:FormGroup;

employees=[];
  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  constructor(private _fb:FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      company:[''],
    });

  }



}
