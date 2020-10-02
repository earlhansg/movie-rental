import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../shared/models';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input()
  user: User;


  constructor() { }

  ngOnInit(): void {}

}
