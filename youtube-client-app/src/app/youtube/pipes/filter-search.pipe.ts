import { ISearchItem } from 'src/app/youtube/models/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  transform(cards: ISearchItem[], search: string): ISearchItem[] {
    const filerCards = cards.filter((card) =>
      card.snippet.title.toLowerCase().includes(search.toLowerCase()),
    );
    return filerCards;
  }
}
