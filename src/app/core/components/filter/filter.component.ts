import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
} from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import {
  FilterConstants,
  FILTER_CONSTANTS,
  FILTER_TOKEN,
  StringConstants,
  STRINGS_CONSTANTS,
  STRING_CONSTANTS_TOKEN,
} from 'src/app/constants/string-constants';
import { FilterSettings } from 'src/interfaces/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    { provide: FILTER_TOKEN, useValue: FILTER_CONSTANTS },
    { provide: STRING_CONSTANTS_TOKEN, useValue: STRINGS_CONSTANTS },
  ],
})
export class FilterComponent implements OnDestroy {
  sortArrow = faSortDown;

  inputsChecked = {
    date: false,
    views: false,
    word: false,
  };

  order: string = this.filterConstants.order.decrease;

  currentFilterType: string = '';

  currentFilterWordValue: string = '';

  stringsForTemplate = this.stringConstants;

  @Output()
  filterSet = new EventEmitter<FilterSettings>();

  constructor(
    @Inject(FILTER_TOKEN) private readonly filterConstants: FilterConstants,
    @Inject(STRING_CONSTANTS_TOKEN)
    private readonly stringConstants: StringConstants
  ) {}

  filterCriteriaClicked(event: Event) {
    const radioInput = event.target as HTMLInputElement;
    this.currentFilterType = radioInput.id;
    this.order = this.filterConstants.order.decrease;
    this.filterSet.emit({ filterType: '' });

    if (radioInput.id === this.filterConstants.type.date) {
      if (!this.inputsChecked.date) {
        this.currentFilterWordValue = '';
        this.inputsChecked.date = !this.inputsChecked.date;
        this.inputsChecked.views = false;
        this.inputsChecked.word = false;
        this.filterSet.emit({
          order: this.order,
          filterType: radioInput.id,
        });
      } else {
        this.currentFilterWordValue = '';
        this.inputsChecked.date = !this.inputsChecked.date;
        radioInput.checked = !radioInput.checked;
        this.filterSet.emit({ filterType: '' });
      }
    }
    if (radioInput.id === this.filterConstants.type.views) {
      if (!this.inputsChecked.views) {
        this.currentFilterWordValue = '';
        this.inputsChecked.views = !this.inputsChecked.views;
        this.inputsChecked.date = false;
        this.inputsChecked.word = false;
        this.filterSet.emit({
          order: this.order,
          filterType: radioInput.id,
        });
      } else {
        this.currentFilterWordValue = '';
        this.inputsChecked.views = !this.inputsChecked.views;
        radioInput.checked = !radioInput.checked;
      }
    }
    if (radioInput.id === this.filterConstants.type.word) {
      if (!this.inputsChecked.word) {
        this.currentFilterWordValue = '';
        this.inputsChecked.word = !this.inputsChecked.word;
        this.inputsChecked.views = false;
        this.inputsChecked.date = false;
        this.filterSet.emit({
          order: this.order,
          filterType: radioInput.id,
        });
      } else {
        this.currentFilterWordValue = '';
        this.inputsChecked.word = !this.inputsChecked.word;
        radioInput.checked = !radioInput.checked;
      }
    }
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.currentFilterWordValue = input.value;
    this.filterSet.emit({
      order: this.order,
      filterType: this.filterConstants.type.word,
      wordOrSentance: this.currentFilterWordValue,
    });
  }

  changeOrder() {
    if (this.order === this.filterConstants.order.decrease) {
      this.order = this.filterConstants.order.increase;
      this.filterSet.emit({
        order: this.order,
        filterType: this.currentFilterType,
      });
      return;
    }
    this.order = this.filterConstants.order.decrease;
    this.filterSet.emit({
      order: this.order,
      filterType: this.currentFilterType,
    });
  }

  arrowDirectionChange() {
    return this.order === this.filterConstants.order.decrease ? 'rotate' : '';
  }

  ngOnDestroy(): void {
    this.filterSet.emit({
      filterType: '',
    });
  }
}
