import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BayhomeComponent } from './bayhome/bayhome.component';
import { ToolcatagoryComponent } from './toolcatagory/toolcatagory.component';


@NgModule({
  declarations: [
    AppComponent,
    BayhomeComponent,
    ToolcatagoryComponent
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
