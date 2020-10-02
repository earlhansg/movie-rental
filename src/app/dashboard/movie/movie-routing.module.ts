import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './containers/movie/movie.component';
import { NewMovieComponent } from './containers/new-movie/new-movie.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: NewMovieComponent
  },
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
