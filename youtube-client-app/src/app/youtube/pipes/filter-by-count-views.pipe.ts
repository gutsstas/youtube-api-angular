import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/interfaces';

@Pipe({
  name: 'filterByCountViews',
})
export class FilterByCountViewsPipe implements PipeTransform {
  transform(
    cards: ISearchItem[],
    isAvailable: boolean,
    up: boolean,
  ): ISearchItem[] {
    if (isAvailable) {
      const sortCards = cards.sort(
        (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
      );
      if (up) return sortCards;
      else return sortCards.reverse();
    } else return cards;
  }
}
