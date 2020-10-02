import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { UserService } from 'src/app/dashboard/services/user.service';

import { userformData } from '../../data/form.data';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userformData = userformData;
  faUser = faUser;


  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onSubmitted(event): void {
    const admin = false;
    const userId = parseInt(event.userId, 10);
    this.userService
      .addUser({...event, userId, admin})
      .subscribe(() => this.router.navigateByUrl(`dashboard/users`));
  }

}
