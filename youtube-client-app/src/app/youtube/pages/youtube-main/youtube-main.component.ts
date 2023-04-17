import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SearchServices } from 'src/app/core/services/search.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISearchItem } from '../../models/interfaces';
import { selectCardFeatureSelector } from 'src/app/redux/reducers/app.reducer';

@Component({
  selector: 'app-youtube-main',
  templateUrl: './youtube-main.component.html',
  styleUrls: ['./youtube-main.component.scss'],
})
export class YoutubeMainComponent {
  data$: Observable<ISearchItem[]>;

  constructor(
    public dataService: DataService,
    public searchServices: SearchServices,
    private router: Router,
    private store: Store,
  ) {
    this.data$ = store.select(selectCardFeatureSelector);
  }

  pathToCreate() {
    this.router.navigate(['/create-card']);
  }
}
