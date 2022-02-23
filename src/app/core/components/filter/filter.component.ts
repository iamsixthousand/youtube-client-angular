import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  isInputDisabled: boolean = true;

  sortByWordInputAccessToggle() {
    this.isInputDisabled = !this.isInputDisabled;
  }
}
