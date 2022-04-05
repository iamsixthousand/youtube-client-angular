import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterSettings } from 'src/interfaces/filter';
import { PostItem } from 'src/interfaces/youtube';
import data from 'src/response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  filterSettingsSubj = new BehaviorSubject({
    order: '',
    filterType: '',
    wordOrSentance: '',
  });

  userEmailSubj: BehaviorSubject<string> = new BehaviorSubject('Login Info');

  userEmailObs$: Observable<string> = this.userEmailSubj.asObservable();

  filterSettingsObs$: Observable<FilterSettings> =
    this.filterSettingsSubj.asObservable();

  postDataSubj: BehaviorSubject<PostItem[]> = new BehaviorSubject(data.items);

  postDataObs$: Observable<PostItem[]> = this.postDataSubj.asObservable();

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
