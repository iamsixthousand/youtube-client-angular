import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { FilterSettings } from 'src/interfaces/filter';
import { PostItem } from 'src/interfaces/youtube';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.scss'],
})
export class SearchResultPageComponent implements OnInit, OnDestroy {
  public $isContentVisible: Observable<boolean> =
    this.searchService.$showFilterFlag;

  posts?: PostItem[];

  posts$: Observable<PostItem[]>;

  postsSubcripiton!: Subscription;

  filterSettings?: FilterSettings;

  filterSettings$: Observable<FilterSettings>;

  filterSubcripiton!: Subscription;

  constructor(private readonly searchService: SearchServiceService) {
    this.posts$ = this.searchService.postDataObs$;
    this.filterSettings$ = this.searchService.filterSettingsObs$;
  }

  ngOnInit(): void {
    this.postsSubcripiton = this.posts$.subscribe((posts) => {
      this.posts = posts;
    });
    this.filterSubcripiton = this.filterSettings$.subscribe((settings) => {
      this.filterSettings = settings;
    });
  }

  ngOnDestroy(): void {
    this.postsSubcripiton.unsubscribe();
    this.filterSubcripiton.unsubscribe();
  }
}
