import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from "./shared/ui/toolbar/toolbar.module";
import {HttpClientModule} from "@angular/common/http";
import {AbstractAuthenticationService} from "./shared/data-acess/abstraction/abstract-authentication-service";
import {MockAuthenticationService} from "./shared/data-acess/mock-authentication.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ToolbarModule
  ],
  providers: [
    {
      provide: AbstractAuthenticationService,
      useClass: MockAuthenticationService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
