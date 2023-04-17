/* eslint-disable @typescript-eslint/no-unused-vars */
import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { cardsReducer } from './reducers/app.reducer';
import { ISearchItem } from '../youtube/models/interfaces';

export interface State {
  cards: ISearchItem[];
}

export const reducers: ActionReducerMap<State> = {
  cards: cardsReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
