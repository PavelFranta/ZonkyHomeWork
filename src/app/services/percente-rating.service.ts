import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PercenteRatingService {

  // Is there any option how to get rating and percentage values from API ?
  private _percentValues = [2.99, 3.99, 4.99, 5.99, 6.99, 8.49, 9.49, 10.99, 13.49, 15.49, 19.99];

  get percentValues() {
    return this._percentValues.map(v => v.toString().replace('.', ',') + ' %');
  }

  private _ratingValues = ['AAAAAA', 'AAAAA', 'AAAA', 'AAA', 'AAE', 'AA', 'AE', 'A', 'B', 'C', 'D'];

  get ratingValues(): string[] {
    return this._ratingValues;
  }

  getRatingFromPercentage(percent: any) {
    percent = percent.replace(',', '.').replace('%', '').trim();
    let result;
    switch (+percent) {
      case this._percentValues[0]:
        result = 'AAAAAA';
        break;
      case this._percentValues[1]:
        result = 'AAAAA';
        break;
      case this._percentValues[2]:
        result = 'AAAA';
        break;
      case this._percentValues[3]:
        result = 'AAA';
        break;
      case this._percentValues[4]:
        result = 'AAE';
        break;
      case this._percentValues[5]:
        result = 'AA';
        break;
      case this._percentValues[6]:
        result = 'AE';
        break;
      case this._percentValues[7]:
        result = 'A';
        break;
      case this._percentValues[8]:
        result = 'B';
        break;
      case this._percentValues[9]:
        result = 'C';
        break;
      case this._percentValues[10]:
        result = 'D';
        break;
    }
    return result;
  }
}
