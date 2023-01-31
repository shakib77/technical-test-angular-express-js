import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PiCreateComponent } from './pi-create/pi-create.component';
import { PiListPageComponent } from './pi-list-page/pi-list-page.component';
import {AppComponent} from "./home/app.component";
import {NzSelectModule} from "ng-zorro-antd/select";
import {ReactiveFormsModule} from "@angular/forms";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";

@NgModule({
  declarations: [
    AppComponent,
    PiCreateComponent,
    PiListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzGridModule,
    NzInputModule,
    NzFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
