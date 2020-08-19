import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengersComponent } from './challengers/challengers.component';

const routes: Routes = [
  { path: 'challengers', component: ChallengersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
