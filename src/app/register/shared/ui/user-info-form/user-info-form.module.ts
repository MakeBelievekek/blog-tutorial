import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoFormComponent} from './user-info-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    UserInfoFormComponent
  ],
  exports: [
    UserInfoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class UserInfoFormModule {
}
