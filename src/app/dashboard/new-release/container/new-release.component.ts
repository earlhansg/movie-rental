import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieService } from '../../services/movie.service';

import { Movie } from '../../shared/models';


@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.scss']
})
export class NewReleaseComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  newRelease: Movie[];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService
      .getNewMovies()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => this.newRelease = res);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
