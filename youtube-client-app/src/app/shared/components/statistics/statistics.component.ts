import { Component, Input } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/interfaces';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  @Input() card: ISearchItem;
}
