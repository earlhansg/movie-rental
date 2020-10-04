import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { fadeAnimation } from './login.animation';

import { AuthService } from '../shared/services/auth.service';

import { User } from 'src/app/dashboard/shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeAnimation]
})
export class LoginComponent implements OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  error$: Observable<string>;


  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSubmittedForm(entryId: string): void {
    this.authService
      .login(parseInt(entryId, 10))
      .pipe(
        map(res => res[0]),
        takeUntil(this.destroyed$)
      )
      .subscribe((user: User) => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigateByUrl('dashboard');
        } else {
          this.error$ = of('cant find your id');
        }
      });
  }

}
