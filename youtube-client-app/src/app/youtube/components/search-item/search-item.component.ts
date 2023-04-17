import { Component, Input } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/interfaces';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() card: ISearchItem;

  getClassOf(card: ISearchItem) {
    const data = new Date(card.snippet.publishedAt);
    const dataNow = new Date();
    const amountDay =
      (dataNow.getTime() - data.getTime()) / (60 * 60 * 24 * 1000);

    if (amountDay >= 180) return 'red';
    else if (amountDay >= 30 && amountDay < 180) return 'yellow';
    else if (amountDay >= 7 && amountDay < 30) return 'green';
    else return 'blue';
  }
}
