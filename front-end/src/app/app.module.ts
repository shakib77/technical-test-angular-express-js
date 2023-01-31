import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PiCreateComponent } from './pi-create/pi-create.component';
import { PiListPageComponent } from './pi-list-page/pi-list-page.component';
import {AppComponent} from "./home/app.component";

@NgModule({
  declarations: [
    AppComponent,
    PiCreateComponent,
    PiListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
