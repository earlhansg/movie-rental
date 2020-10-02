import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { User } from 'src/app/dashboard/shared/models';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  user: User;


  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  // tslint:disable-next-line: typedef
  canActivate() {
    if (this.user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
