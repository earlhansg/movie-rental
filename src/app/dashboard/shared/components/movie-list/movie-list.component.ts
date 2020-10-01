import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Movie } from '../../models';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {

  @Input()
  movies: Movie[];


  constructor() { }

}
