import { InjectionToken } from '@angular/core';

export interface StringConstants {
  searchPlaceholderValue: string;
  searchButtonSubmit: string;
  cardInfoText: string;
  sortingBy: string;
  date: string;
  wordOrSentance: string;
  countOfViews: string;
}

export const STRINGS_CONSTANTS: StringConstants = {
  searchPlaceholderValue: 'Search for anything',
  searchButtonSubmit: 'Search',
  cardInfoText: 'more..',
  sortingBy: 'Sorting by',
  date: 'date',
  wordOrSentance: 'word or sentance',
  countOfViews: 'count of views',
};

export const STRING_CONSTANTS_TOKEN = new InjectionToken<StringConstants>(
  'STRING_CONSTANTS_TOKEN',
  { providedIn: 'root', factory: () => STRINGS_CONSTANTS }
);

export interface FilterConstants {
  order: FilterOrder;
  type: FilterType;
}

export interface FilterType {
  date: string;
  views: string;
  word: string;
}

export interface FilterOrder {
  decrease: string;
  increase: string;
}

export const FILTER_CONSTANTS: FilterConstants = {
  order: {
    decrease: 'decrease',
    increase: 'increase',
  },
  type: {
    date: 'date',
    views: 'views',
    word: 'word',
  },
};

export const FILTER_TOKEN = new InjectionToken<FilterConstants>(
  'FILTER_TOKEN',
  {
    providedIn: 'root',
    factory: () => FILTER_CONSTANTS,
  }
);
