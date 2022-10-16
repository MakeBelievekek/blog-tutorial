import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPage} from "./login-page";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginFormModule} from "../../sahred/ui/login-form/login-form.module";


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginFormModule,
    LoginRoutingModule
  ]
})
export class LoginModule {
}
