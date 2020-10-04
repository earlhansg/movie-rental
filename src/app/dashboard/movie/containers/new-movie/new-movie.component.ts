import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieService } from 'src/app/dashboard/services/movie.service';

import { movieformData } from '../../data/form.data';


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  movieformData = movieformData;


  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


  onSubmitted(event): void {
    const imageUrl = 'assets/images/movies/no-image.png';
    const returnDate = null;
    const borrowedId = null;
    const available = true;
    const url = event.status === 'new' ? 'new-release'
      : event.status === 'upcoming' ? 'coming-soon'
      : 'trending';

    this.movieService
      .addMovie({...event, imageUrl, returnDate, borrowedId, available})
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.router.navigateByUrl(`dashboard/${url}`));

  }

}
