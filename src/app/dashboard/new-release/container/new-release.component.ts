import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieService } from '../../services/movie.service';

import { Movie, User } from '../../shared/models';


@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.scss']
})
export class NewReleaseComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  newRelease: Movie[];
  user: User;


  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.movieService
      .getNewMovies()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => this.newRelease = res);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  navigate(): void {
    this.router.navigateByUrl(`dashboard/movie`);
  }

}
