import { Component } from '@angular/core';
import { SearchServices } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
})
export class SearchFiltersComponent {
  isVisible = false;

  filterDate = false;

  up = false;

  filterCount = false;

  term = '';

  constructor(public searchServices: SearchServices) {}

  getValueSearch() {
    this.searchServices.valueInput = this.term;
  }

  getVisible() {
    return this.isVisible;
  }

  changeVisible() {
    this.isVisible = !this.isVisible;
  }

  clickDate() {
    this.searchServices.filter.date = true;
    this.searchServices.filter.count = false;
    this.searchServices.filter.up = !this.searchServices.filter.up;
  }

  clickCountViews() {
    this.searchServices.filter.date = false;
    this.searchServices.filter.count = true;
    this.searchServices.filter.up = !this.searchServices.filter.up;
  }
}
