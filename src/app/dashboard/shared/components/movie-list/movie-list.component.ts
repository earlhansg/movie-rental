import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { listAnimation } from './movie-list.animation';

import { Movie } from '../../models';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {

  @Input()
  movies: Movie[];


  constructor(private router: Router) { }

  checkMovie(isAvailable: boolean, movieId: number, borrowedId = null): void {
    if (isAvailable) {
      this.router.navigateByUrl(`dashboard/movie/${movieId}`);
    } else if (borrowedId) {
      this.router.navigateByUrl(`dashboard/movie/${movieId}`);
    }
  }

}
