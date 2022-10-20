import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from "./home-page";
import {HomeRoutingModule} from "./home-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AnimatedModule} from "../../shared/ui/animated/animated.module";
import {BlogListItemModule} from "../../shared/ui/blog-list-item/blog-list-item.module";


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    AnimatedModule,
    BlogListItemModule
  ]
})
export class HomeModule { }
