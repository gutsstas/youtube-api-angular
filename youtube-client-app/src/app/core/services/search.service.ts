import { Injectable } from '@angular/core';
import { SearchVideosService } from './search-videos.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SearchServices {
  valueInput = '';

  resultVisible = false;

  filterVisible = false;

  filter = {
    date: false,
    count: false,
    up: false,
  };

  constructor(
    private searchVideosService: SearchVideosService,
    private router: Router,
  ) {}
}
