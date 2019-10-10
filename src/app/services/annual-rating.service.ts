import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnualRatingService {
  constructor() {
  }

  // Is there any option how to get rating values from API ?
  private _ratingValues = [2.99, 3.99, 4.99, 5.99, 6.99, 8.49, 9.49, 10.99, 13.49, 15.49, 19.99];

  get ratingValues() {
    return this._ratingValues.map(v => v.toString().replace('.', ',') + ' %');
  }
}
