import { Component, OnDestroy, OnInit } from '@angular/core';

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


  constructor(private userService: UserService) { }

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

}
