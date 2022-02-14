import { Component } from '@angular/core';
import stringConstants from 'src/constants/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchPlaceholder = stringConstants.searchPlaceholderValue;

  searchButtonText = stringConstants.searchButtonSubmit;

  searchSubmit(event: Event) {
    event.preventDefault();
  }
}
