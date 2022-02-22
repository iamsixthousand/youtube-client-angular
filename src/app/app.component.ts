import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchServiceService } from './core/services/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly searchService: SearchServiceService) {}

  public $isFilterVisible: Observable<boolean> =
    this.searchService.showFilterFlag;

  showFilter: boolean = false;
}
