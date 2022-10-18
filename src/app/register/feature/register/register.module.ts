import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterPage} from "./register-page";
import {RegisterRoutingModule} from "./register-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {UserInfoFormModule} from "../../shared/ui/user-info-form/user-info-form.module";
import {OptInFormModule} from "../../shared/ui/opt-in-form/opt-in-form.module";


@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    UserInfoFormModule,
    MatButtonModule,
    OptInFormModule,
  ]
})
export class RegisterModule {
}
