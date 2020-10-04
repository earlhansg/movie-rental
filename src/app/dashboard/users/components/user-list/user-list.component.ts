import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../shared/models';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {

  @Input()
  users: User[];

  faUser = faUser;


  constructor() { }

}
