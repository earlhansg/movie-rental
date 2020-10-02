import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovingRoutingModule } from './movie-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MovieComponent } from './containers/movie/movie.component';
import { NewMovieComponent } from './containers/new-movie/new-movie.component';


@NgModule({
    imports: [
      CommonModule,
      MovingRoutingModule,
      SharedModule
    ],
    declarations: [
      MovieComponent,
      NewMovieComponent
    ]
})
export class MovieModule {}
