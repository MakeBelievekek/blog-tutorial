import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPage} from "./login-page";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginFormModule} from "../../shared/ui/login-form/login-form.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginFormModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule {
}
