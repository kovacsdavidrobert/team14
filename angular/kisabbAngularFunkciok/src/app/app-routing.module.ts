import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { Hiba404Component } from './hiba404/hiba404.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { LogoloComponent } from './logolo/logolo.component';
import { TablazatComponent } from './tablazat/tablazat.component';

const routes: Routes = [
  {path: "kezdolap",component: KezdolapComponent},
  {path: "hiba404", component: Hiba404Component},
  {path: "databinding", component: DataBidingComponent},
  {path: "ngif", component: NgifComponent},
  {path: "ngfor", component: NgforComponent},
  {path: "logolo", component: LogoloComponent},
  {path: "tablazat", component: TablazatComponent},
  {path: "", redirectTo: "/kezdolap",pathMatch:"full"},
  {path: "**", component: Hiba404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
