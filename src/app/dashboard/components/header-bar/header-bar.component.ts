import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../../shared/models';


@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent {

  @Input()
  user: User;


  constructor() { }

}
