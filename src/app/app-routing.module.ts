import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerCardComponent } from './trainer-card/trainer-card.component';

const routes: Routes = [
  {
    path: '',
    component: TrainerCardComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
