import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  exports: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegisterFormModule { }
