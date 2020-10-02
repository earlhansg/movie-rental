import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MovieService } from '../../../services/movie.service';

import { Movie } from '../../../shared/models';

import { formData } from '../../data/form.data';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie$: Observable<Movie>;

  formData = formData;


  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movie$ = this.route.params
      .pipe(switchMap(param => this.movieService.getMovieById(param.id)));
  }

}