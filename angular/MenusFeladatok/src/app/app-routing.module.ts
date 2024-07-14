import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { Hiba404Component } from './hiba404/hiba404.component';
import { TeglalapComponent } from './teglalap/teglalap.component';
import { ParosparatlanComponent } from './parosparatlan/parosparatlan.component';
import { HalmazallapotComponent } from './halmazallapot/halmazallapot.component';

const routes: Routes = [
  {path: "kezdolap", component: KezdolapComponent},
  {path: "hiba", component:Hiba404Component},
  {path: "teglalap", component:TeglalapComponent},
  {path: "parosparatlan", component:ParosparatlanComponent},
  {path: "halmazallapot", component: HalmazallapotComponent},
  {path: "", redirectTo: "/kezdolap", pathMatch:'full'},
  {path: "**", component:Hiba404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
