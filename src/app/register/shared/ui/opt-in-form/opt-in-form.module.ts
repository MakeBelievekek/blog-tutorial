import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptInFormComponent } from './opt-in-form.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    OptInFormComponent
  ],
  exports: [
    OptInFormComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class OptInFormModule { }
