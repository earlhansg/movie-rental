import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '../../shared/service/rest.service';

import { HttpMethodEnum } from '../../shared/enums';

import { User } from '../shared/models';


@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService {

  usersUrl = '/users';


  constructor(
    http: HttpClient,
    @Inject('API_URL') protected baseUrl: string
  ) { super(http, baseUrl); }

  getUsers(): Observable<User[]> {
    return this.request(this.usersUrl, HttpMethodEnum.GET);
  }

  addUser(user: User): Observable<User> {
    return this.request(this.usersUrl, HttpMethodEnum.POST, user);
  }

}
