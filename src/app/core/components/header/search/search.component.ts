import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { RouterPath } from 'src/app/routes.enum';
import stringConstants from 'src/constants/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(
    private readonly searchService: SearchServiceService,
    private readonly router: Router
  ) {}

  searchPlaceholder = stringConstants.searchPlaceholderValue;

  searchButtonText = stringConstants.searchButtonSubmit;

  showResults(event: Event) {
    event.preventDefault();
    this.router.navigate([RouterPath.SearchResultPage]);
  }
}
