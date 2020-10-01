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
  borrowedUrl = '/movies?status=borrowed';
  upcomingUrl = '/movies?status=upcoming';
  trendingUrl = '/movies?status=trending';


  constructor(
    http: HttpClient,
    @Inject('API_URL') protected baseUrl: string
  ) { super(http, baseUrl); }

  getNewMovies(): Observable<Movie[]> {
    return this.request(this.newUrl, HttpMethodEnum.GET);
  }

  getBorrowedMovies(): Observable<Movie[]> {
    return this.request(this.borrowedUrl, HttpMethodEnum.GET);
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.request(this.upcomingUrl, HttpMethodEnum.GET);
  }

  getTrendingMovies(): Observable<Movie[]> {
    return this.request(this.trendingUrl, HttpMethodEnum.GET);
  }

}
