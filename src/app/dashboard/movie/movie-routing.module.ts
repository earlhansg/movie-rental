import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './container/movie.component';

export const ROUTES: Routes = [
  {
    path: ':id',
    component: MovieComponent
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class MovingRoutingModule {}
