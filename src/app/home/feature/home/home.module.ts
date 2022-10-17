import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePage} from "./home-page";
import {HomeRoutingModule} from "./home-routing.module";
import {LandingSectionModule} from "../../shared/ui/landing-section/landing-section.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LandingSectionModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
