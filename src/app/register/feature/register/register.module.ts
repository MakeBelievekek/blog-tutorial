import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterPage} from "./register-page";
import {RegisterRoutingModule} from "./register-routing.module";
import {RegisterFormModule} from "../../sahred/ui/register-form/register-form.module";



@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RegisterFormModule
  ]
})
export class RegisterModule { }
