import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { FilterSettings } from 'src/interfaces/filter';
import { PostItem } from 'src/interfaces/youtube';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent {
  public $isContentVisible: Observable<boolean> =
    this.searchService.$showFilterFlag;

  @Input()
  filterSettings?: FilterSettings;

  @Input()
  posts?: PostItem[];

  constructor(private readonly searchService: SearchServiceService) {}
}
