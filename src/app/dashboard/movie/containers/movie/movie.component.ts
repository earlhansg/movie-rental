import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, ReplaySubject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import { MovieService } from '../../../services/movie.service';

import { Movie, User } from '../../../shared/models';

import { formData } from '../../data/form.data';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie$: Observable<Movie>;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  formData = formData;
  user: User;
  paramId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.movie$ = this.route.params
      .pipe(
        tap(({ id }) => this.paramId = id),
        switchMap(param => this.movieService.getMovieById(param.id)),
        takeUntil(this.destroyed$)
      );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSubmitted({returnDate}): void {
    this.movieService.updateMovie(this.paramId, this.user.id, returnDate)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(data => this.router.navigateByUrl(`dashboard/borrowed`));
  }

}
