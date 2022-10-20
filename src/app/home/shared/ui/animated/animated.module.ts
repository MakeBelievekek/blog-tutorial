import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedComponent } from './animated.component';



@NgModule({
  declarations: [
    AnimatedComponent
  ],
  exports: [
    AnimatedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnimatedModule { }
