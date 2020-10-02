import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from 'src/app/dashboard/services/user.service';

import { User } from 'src/app/dashboard/shared/models';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  users: User[];


  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => this.users = res);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  navigate(): void {
    this.router.navigateByUrl(`dashboard/users/new`);
  }

}
