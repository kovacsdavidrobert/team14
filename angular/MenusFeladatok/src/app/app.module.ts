import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { Hiba404Component } from './hiba404/hiba404.component';
import { TeglalapComponent } from './teglalap/teglalap.component';
import { ParosparatlanComponent } from './parosparatlan/parosparatlan.component';
import { HalmazallapotComponent } from './halmazallapot/halmazallapot.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KezdolapComponent,
    Hiba404Component,
    TeglalapComponent,
    ParosparatlanComponent,
    HalmazallapotComponent
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
