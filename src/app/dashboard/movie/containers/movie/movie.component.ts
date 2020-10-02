import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { MovieService } from '../../../services/movie.service';

import { Movie, User } from '../../../shared/models';

import { formData } from '../../data/form.data';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie$: Observable<Movie>;

  formData = formData;
  user: User;
  paramId: number;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.movie$ = this.route.params
      .pipe(
        tap(({ id }) => this.paramId = id),
        switchMap(param => this.movieService.getMovieById(param.id))
      );
  }

  onSubmitted({returnDate}): void {
    this.movieService.updateMovie(this.paramId, this.user.id, returnDate)
      .subscribe(data => this.router.navigateByUrl(`dashboard/borrowed`));
  }

}
