import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '../../shared/service/rest.service';

import { HttpMethodEnum } from '../../shared/enums';

import { Movie } from '../shared/models';


@Injectable({
  providedIn: 'root'
})
export class MovieService extends RestService {

  newUrl = '/movies?status=new';
  borrowedUrl = '/movies?borrowedId';
  upcomingUrl = '/movies?status=upcoming';
  trendingUrl = '/movies?status=trending';
  movieUrl = '/movies';


  constructor(
    http: HttpClient,
    @Inject('API_URL') protected baseUrl: string
  ) { super(http, baseUrl); }

  getNewMovies(): Observable<Movie[]> {
    return this.request(this.newUrl, HttpMethodEnum.GET);
  }

  getBorrowedMovies(userId: number): Observable<Movie[]> {
    return this.request(`${this.borrowedUrl}=${userId}`, HttpMethodEnum.GET);
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.request(this.upcomingUrl, HttpMethodEnum.GET);
  }

  getTrendingMovies(): Observable<Movie[]> {
    return this.request(this.trendingUrl, HttpMethodEnum.GET);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.request(`${this.movieUrl}/${id}`, HttpMethodEnum.GET);
  }

  updateMovie(id: number, userId: number, date: string): Observable<Movie> {
    const available = false;
    const status = 'borrowed';
    const borrowedId = userId;
    const returnDate = date;

    return this.request(`${this.movieUrl}/${id}`,
      HttpMethodEnum.PATCH, { available, status, borrowedId, returnDate });
  }

  returnMovie(id: number, userId: number, body: object): Observable<Movie> {
    return this.request(`${this.movieUrl}/${id}`, HttpMethodEnum.PATCH, body);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.request(this.movieUrl, HttpMethodEnum.POST, movie);
  }

}
