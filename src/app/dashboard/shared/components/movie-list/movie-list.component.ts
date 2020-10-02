import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../../models';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {

  @Input()
  movies: Movie[];


  constructor(private router: Router) { }

  checkMovie(isAvailable: boolean, movieId: number): void {
    if (isAvailable) {
      this.router.navigateByUrl(`dashboard/movie/${movieId}`);
    }
  }

}
