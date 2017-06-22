/**
 * Created by admin on 6/20/2017.
 */
import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: '',
  templateUrl: './register.html',
  styleUrls: ['./registerform.css']
})
export class RegisterForm {
  public myForm:FormGroup;
  constructor(private location: Location,private _fb:FormBuilder) {

 }

  goBack() {
    this.location.back();
  }

cancel(){
  if(confirm("Are you sure to delete "+name)) {
    console.log("Implement delete functionality here");
  }
}
  ngOnInit() {
    this.myForm = this._fb.group({
      email: ['fwqefwqefw'],
      area:[''],

    });

  }
  save(formvalue){
    console.log(formvalue);
    if(formvalue.valid){
 // alert(x.value.email);
    }
  }
}
