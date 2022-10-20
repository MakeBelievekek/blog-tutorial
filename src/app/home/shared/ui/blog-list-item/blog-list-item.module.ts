import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListItemComponent } from './blog-list-item.component';



@NgModule({
  declarations: [
    BlogListItemComponent
  ],
  exports: [
    BlogListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogListItemModule { }
