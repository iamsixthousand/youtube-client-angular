import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  #showFilter: boolean = false;

  #showFilterFlag = new BehaviorSubject(this.#showFilter);

  showFilterFlag = this.#showFilterFlag.asObservable();

  toggleFilter() {
    this.#showFilter = !this.#showFilter;
    this.#showFilterFlag.next(this.#showFilter);
    console.log('toggled', this.#showFilter);
  }
}
