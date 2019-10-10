import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ZonkyRealDataService} from '../../../services/zonky-real-data.service';

@Component({
  selector: 'app-annual-rating-item',
  templateUrl: './annual-rating-item.component.html',
  styleUrls: ['./annual-rating-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnnualRatingItemComponent implements OnInit {

  private _rating;

  constructor(private zonkyRealDataService: ZonkyRealDataService) {
  }

  private _value;

  get value() {
    return this._value;
  }

  @Input() set value(value) {
    this._value = value;
    switch (this._value) {
      case '2,99 %':
        this._rating = 'AAAAAA';
        break;
      case '3,99 %':
        this._rating = 'AAAAA';
        break;
      case '4,99 %':
        this._rating = 'AAAA';
        break;
      case '5,99 %':
        this._rating = 'AAA';
        break;
      case '6,99 %':
        this._rating = 'AAE';
        break;
      case '8,49 %':
        this._rating = 'AA';
        break;
      case '9,49 %':
        this._rating = 'AE';
        break;
      case '10,99 %':
        this._rating = 'A';
        break;
      case '13,49 %':
        this._rating = 'B';
        break;
      case '15,49 %':
        this._rating = 'C';
        break;
      case '19,99 %':
        this._rating = 'D';
        break;
    }
  }

  ngOnInit() {
  }

  ratingClicked() {
    this.zonkyRealDataService.getLoansAverageAccordingToRating(this._rating, this._value);
  }
}

