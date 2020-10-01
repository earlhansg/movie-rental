import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieListComponent } from './components/movie-list/movie-list.component';


@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule
    ],
    declarations: [
      MovieListComponent
    ],
    exports: [
      MovieListComponent
    ]
})
export class SharedModule {}
