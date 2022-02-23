import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostItem } from 'src/interfaces/youtube';
import data from 'src/response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  postData: PostItem[] = data.items;

  #showFilter: boolean = false;

  #showFilterFlag: BehaviorSubject<boolean> = new BehaviorSubject(
    this.#showFilter
  );

  $showFilterFlag: Observable<boolean> = this.#showFilterFlag.asObservable();

  toggleFilter() {
    this.#showFilter = !this.#showFilter;
    this.#showFilterFlag.next(this.#showFilter);
  }
}
