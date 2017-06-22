import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import { Form1 } from './customform/from1';
import {HttpModule} from '@angular/http';
import {Empservice} from './customform/jsondataget';
import {Serviveimpl} from './customform/jsonserviceimpl';
import {CourcesHttpimpl} from './cources/courcesHttpimpl';
import{CourcesGetCall} from './cources/cources';
import 'rxjs/Rx';
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./routing";

@NgModule({
  declarations: [Serviveimpl,CourcesGetCall,
   AppComponents,AppComponent
  ],
  imports: [ReactiveFormsModule,
    BrowserModule,[HttpModule],  RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [Empservice,CourcesHttpimpl],
  bootstrap: [AppComponent]
})
export class AppModule { }
