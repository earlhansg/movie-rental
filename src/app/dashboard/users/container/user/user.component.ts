import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from 'src/app/dashboard/services/user.service';

import { userformData } from '../../data/form.data';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);


  userformData = userformData;
  faUser = faUser;


  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSubmitted(event): void {
    const admin = false;
    const userId = parseInt(event.userId, 10);
    this.userService
      .addUser({...event, userId, admin})
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.router.navigateByUrl(`dashboard/users`));
  }

}
