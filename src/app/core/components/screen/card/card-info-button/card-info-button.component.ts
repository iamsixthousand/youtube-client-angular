import { Component, Inject } from '@angular/core';
import {
  StringConstants,
  STRINGS_CONSTANTS,
  STRING_CONSTANTS_TOKEN,
} from 'src/app/constants/string-constants';

@Component({
  selector: 'app-card-info-button',
  templateUrl: './card-info-button.component.html',
  styleUrls: ['./card-info-button.component.scss'],
  providers: [
    { provide: STRING_CONSTANTS_TOKEN, useFactory: () => STRINGS_CONSTANTS },
  ],
})
export class CardInfoButtonComponent {
  buttonText = this.stringConstants.cardInfoText;

  constructor(
    @Inject(STRING_CONSTANTS_TOKEN)
    private readonly stringConstants: StringConstants
  ) {}
}
