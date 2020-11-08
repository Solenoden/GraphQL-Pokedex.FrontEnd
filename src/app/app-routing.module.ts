import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

const routes: Routes = [
  {
    path: 'pokedex',
    component: NavBarComponent,
    children: [

    ]
  },
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
