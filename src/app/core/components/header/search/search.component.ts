import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  STRING_CONSTANTS_TOKEN,
  STRINGS_CONSTANTS,
  StringConstants,
} from 'src/app/constants/string-constants';
import { RouterPath } from 'src/app/routes.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    { provide: STRING_CONSTANTS_TOKEN, useFactory: () => STRINGS_CONSTANTS },
  ],
})
export class SearchComponent {
  searchPlaceholder = this.stringsConstants.searchPlaceholderValue;

  searchButtonText = this.stringsConstants.searchButtonSubmit;

  constructor(
    private readonly router: Router,
    @Inject(STRING_CONSTANTS_TOKEN)
    private readonly stringsConstants: StringConstants
  ) {}

  showResults(event: Event) {
    event.preventDefault();
    this.router.navigate([RouterPath.SearchResultPage]);
  }
}
