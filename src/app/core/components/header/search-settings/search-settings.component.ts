/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { SearchServiceService } from 'src/app/core/services/search-service.service';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export class SearchSettingsComponent {
  constructor(private readonly searchservice: SearchServiceService) {}

  toggleFilter() {
    this.searchservice.toggleFilter();
  }
}
