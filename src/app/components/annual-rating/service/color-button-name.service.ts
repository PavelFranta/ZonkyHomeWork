import {Injectable} from '@angular/core';
import {PercenteRatingService} from '../../../services/percente-rating.service';

@Injectable({
  providedIn: 'root'
})
export class ColorButtonNameService {
  constructor(private percentageRatingService: PercenteRatingService) {
    this._colorsNames = this.percentageRatingService.ratingValues;
  }

  private _colorsNames;

  get colorsNames(): string[] {
    return this._colorsNames.map(v => 'rating-' + v.toLowerCase() + '-button');
  }
}
