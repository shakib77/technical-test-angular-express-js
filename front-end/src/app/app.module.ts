import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PiCreateComponent } from './pi-create/pi-create.component';
import { PiListPageComponent } from './pi-list-page/pi-list-page.component';
import {AppComponent} from "./home/app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCardModule} from "ng-zorro-antd/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";

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
    NzCardModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    NzCheckboxModule,
    FormsModule,
    // PrebootModule.withConfig({appRoot: 'app-root'}),
    // BrowserTransferStateModule,
    // NgZorroAntdModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
