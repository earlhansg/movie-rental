import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '../../../shared/service/rest.service';
import { HttpMethodEnum } from '../../../shared/enums';


@Injectable({ providedIn: 'root' })
export class AuthService extends RestService {

  url = '/users';


  constructor(
    http: HttpClient,
    @Inject('API_URL') protected baseUrl: string
  ) { super(http, baseUrl); }

  login(entryId: number): Observable<any> {
    return this.request(`${this.url}?userId=${entryId}`, HttpMethodEnum.GET);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

}
