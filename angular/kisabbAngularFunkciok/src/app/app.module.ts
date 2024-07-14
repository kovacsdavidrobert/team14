import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { Hiba404Component } from './hiba404/hiba404.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { LogoloComponent } from './logolo/logolo.component';
import { FormsModule } from '@angular/forms';
import { TablazatComponent } from './tablazat/tablazat.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBidingComponent,
    KezdolapComponent,
    Hiba404Component,
    NgforComponent,
    NgifComponent,
    LogoloComponent,
    TablazatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
