import { Component, OnInit } from '@angular/core';

import { movieformData } from '../../data/form.data';


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {

  movieformData = movieformData;


  constructor() { }

  ngOnInit(): void {}

}
