import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';

const routes: Routes = [
  {path: "fooldal", component: FooldalComponent},
  {path: "", redirectTo: "/fooldal", pathMatch:"full"},
  {path: "**", redirectTo: "/fooldal", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
