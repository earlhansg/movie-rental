import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieService } from '../../services/movie.service';

import { Movie, User } from '../../shared/models';


@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.scss']
})
export class BorrowedComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  borrowed: Movie[];
  user: User;


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.movieService
      .getBorrowedMovies(this.user.id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => this.borrowed = res);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
