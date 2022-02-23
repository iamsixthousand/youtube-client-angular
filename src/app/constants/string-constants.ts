import { InjectionToken } from '@angular/core';

export interface StringConstants {
  searchPlaceholderValue: string;
  searchButtonSubmit: string;
  cardInfoText: string;
}

export const STRINGS_CONSTANTS: StringConstants = {
  searchPlaceholderValue: 'Search for anything',
  searchButtonSubmit: 'Search',
  cardInfoText: 'more..',
};

export const STRING_CONSTANTS_TOKEN = new InjectionToken<StringConstants>(
  'STRING_CONSTANTS_TOKEN'
);
