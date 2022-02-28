import { Component, Input } from '@angular/core';
import { FilterSettings } from 'src/interfaces/filter';
import { PostItem } from 'src/interfaces/youtube';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {
  @Input()
  filterSettings?: FilterSettings;

  @Input()
  posts?: PostItem[];
}
