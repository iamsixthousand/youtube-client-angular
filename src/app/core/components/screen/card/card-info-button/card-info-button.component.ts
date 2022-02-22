import { Component } from '@angular/core';
import stringConstants from 'src/constants/constants';

@Component({
  selector: 'app-card-info-button',
  templateUrl: './card-info-button.component.html',
  styleUrls: ['./card-info-button.component.scss'],
})
export class CardInfoButtonComponent {
  buttonText = stringConstants.moreButtonText;
}
