import { Injectable } from '@angular/core';
import { ISearchItem } from '../models/interfaces';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Store } from '@ngrx/store';
import { changeCards } from 'src/app/redux/actions/app.actions';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = new BehaviorSubject<ISearchItem[]>([]);

  currentData = this.data.asObservable();

  setData(value: ISearchItem[]) {
    this.store.dispatch(
      changeCards({ card: [...this.initialState, ...value] }),
    );
  }

  constructor(private store: Store) {}

  initialState: ISearchItem[] = [];
}
