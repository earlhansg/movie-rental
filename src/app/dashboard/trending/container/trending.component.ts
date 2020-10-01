import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieService } from '../../services/movie.service';

import { Movie } from '../../shared/models';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  trending: Movie[];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService
      .getTrendingMovies()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => this.trending = res);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
