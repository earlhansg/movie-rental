import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovingRoutingModule } from './movie-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MovieComponent } from './container/movie.component';


@NgModule({
    imports: [
      CommonModule,
      MovingRoutingModule,
      SharedModule
    ],
    declarations: [
      MovieComponent
    ]
})
export class MovieModule {}
