import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OperationOneComponent } from './components/operation-one/operation-one.component';
import { OperationTwoComponent } from './components/operation-two/operation-two/operation-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OperationOneComponent,
    OperationTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
