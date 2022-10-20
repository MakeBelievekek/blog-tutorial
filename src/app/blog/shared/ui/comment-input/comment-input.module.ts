import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentInputComponent } from './comment-input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CommentInputComponent
  ],
  exports: [
    CommentInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CommentInputModule { }
