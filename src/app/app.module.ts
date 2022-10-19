import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from "./shared/ui/toolbar/toolbar.module";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {FoxSpinnerModule} from "./shared/ui/fox-spinner/fox-spinner.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ToolbarModule,
    FoxSpinnerModule
  ],
  providers: [
    ...environment.providers.appModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
