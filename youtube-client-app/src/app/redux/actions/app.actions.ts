import { createAction, props } from '@ngrx/store';
import { ISearchItem } from 'src/app/youtube/models/interfaces';

export const addCards = createAction(
  '[Counter Component] Add Cards',
  props<{ card: ISearchItem }>(),
);

export const changeCards = createAction(
  '[Counter Component] Change Cards',
  props<{ card: ISearchItem[] }>(),
);

export const removeCards = createAction('[Counter Component] Remove Cards');
