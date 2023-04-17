import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { addCards, changeCards } from '../actions/app.actions';
import { ISearchItem } from 'src/app/youtube/models/interfaces';

export const initialState: ISearchItem[] = [];

export const cardsReducer = createReducer(
  initialState,
  on(addCards, (state, action): ISearchItem[] => [action.card, ...state]),
  on(changeCards, (state, action): ISearchItem[] => action.card),
);

export const selectCardFeatureSelector =
  createFeatureSelector<ISearchItem[]>('cards');
