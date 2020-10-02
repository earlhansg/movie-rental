import { Component, OnDestroy, OnInit } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { userformData } from '../../data/form.data';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  userformData = userformData;
  faUser = faUser;


  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

}
