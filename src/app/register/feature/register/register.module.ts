import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterPage} from "./register-page";
import {RegisterRoutingModule} from "./register-routing.module";
import {RegisterFormModule} from "../../shared/ui/register-form/register-form.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RegisterFormModule,
    MatButtonModule,
  ]
})
export class RegisterModule {
}
