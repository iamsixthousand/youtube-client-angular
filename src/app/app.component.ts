import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostItem } from 'src/interfaces/youtube';
import data from '../response.json';
import { SearchServiceService } from './core/services/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly searchService: SearchServiceService) {}

  public $isFilterVisible: Observable<boolean> =
    this.searchService.showFilterFlag;

  showFilter: boolean = false;

  posts: PostItem[] = data.items;

  ngOnInit(): void {
    console.log(this.showFilter);
  }
}
