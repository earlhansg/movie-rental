import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieService } from '../../services/movie.service';

import { Movie } from '../../shared/models';


@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  upcoming: Movie[];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService
      .getUpcomingMovies()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => this.upcoming = res);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
