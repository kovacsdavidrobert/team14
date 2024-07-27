import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeladatComponent } from './feladat/feladat.component';

const routes: Routes = [
  {path:"feladat", component:FeladatComponent},
  {path: "", component: FeladatComponent},
  {path: "**", redirectTo: "/feladat", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
