import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoxSpinnerComponent } from './fox-spinner.component';



@NgModule({
  declarations: [
    FoxSpinnerComponent
  ],
  exports: [
    FoxSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoxSpinnerModule { }
