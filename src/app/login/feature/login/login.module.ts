import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPage} from "./login-page";
import {LoginRoutingModule} from "./login-routing.module";



@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
