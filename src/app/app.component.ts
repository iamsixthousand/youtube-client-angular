import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterSettings } from 'src/interfaces/filter';
import { PostItem } from 'src/interfaces/youtube';
import data from 'src/response.json';
import {
  FILTER_TOKEN,
  FILTER_CONSTANTS,
  FilterConstants,
} from './constants/string-constants';
import { SearchServiceService } from './core/services/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: FILTER_TOKEN, useFactory: () => FILTER_CONSTANTS }],
})
export class AppComponent {
  public $isFilterVisible: Observable<boolean> =
    this.searchService.$showFilterFlag;

  filterSettings: FilterSettings = {
    order: this.filterConstants.order.decrease,
    filterType: '',
    wordOrSentance: '',
  };

  posts: PostItem[] = data.items;

  postsInitial: PostItem[] = data.items;

  constructor(
    private readonly searchService: SearchServiceService,
    @Inject(FILTER_TOKEN) private readonly filterConstants: FilterConstants
  ) {}

  getFilterSettings(filterSettings: FilterSettings) {
    this.filterSettings = filterSettings;
  }
}
