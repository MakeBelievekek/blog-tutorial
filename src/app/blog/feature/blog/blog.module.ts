import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogPage} from "./blog-page";
import {BlogRoutingModule} from "./blog-routing.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    BlogPage
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatIconModule
  ]
})
export class BlogModule { }
