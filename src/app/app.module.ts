import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from "./shared/ui/toolbar/toolbar.module";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {FoxSpinnerModule} from "./shared/ui/fox-spinner/fox-spinner.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {blogPostReducer} from "./home/data-acess/store/home-page.reducers";
import {BlogPostEffects} from "./home/data-acess/store/home-page.effects";
import {loginReducer} from "./login/data-acess/store/login.reducers";
import {LoginEffects} from "./login/data-acess/store/login.effects";

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
    FoxSpinnerModule,
    StoreModule.forRoot({blog: blogPostReducer, user: loginReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([BlogPostEffects, LoginEffects]),
  ],
  providers: [
    ...environment.providers.appModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
