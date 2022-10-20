import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from "./home-page";
import {HomeRoutingModule} from "./home-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AnimatedModule} from "../../shared/ui/animated/animated.module";
import {BlogListItemModule} from "../../shared/ui/blog-list-item/blog-list-item.module";
import {ConfirmDialogComponent} from "../../../shared/ui/confirm-dialog/confirm-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";


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
    BlogListItemModule,
    MatDialogModule
  ],
  entryComponents:[
    ConfirmDialogComponent
  ]
})
export class HomeModule { }
