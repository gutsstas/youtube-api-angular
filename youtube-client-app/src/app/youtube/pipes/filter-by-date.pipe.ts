import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/interfaces';

@Pipe({
  name: 'filterByDate',
})
export class FilterByDatePipe implements PipeTransform {
  transform(
    cards: ISearchItem[],
    isAvailable: boolean,
    up: boolean,
  ): ISearchItem[] {
    if (isAvailable) {
      const sortCards = cards.sort(
        (a, b) =>
          +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt),
      );
      if (up) return sortCards;
      else return sortCards.reverse();
    } else return cards;
  }
}
