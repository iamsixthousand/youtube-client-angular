import { Component, Input } from '@angular/core';
import { Statistics } from 'src/interfaces/youtube';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss'],
})
export class CardStatsComponent {
  @Input()
  stats?: Statistics;
}
