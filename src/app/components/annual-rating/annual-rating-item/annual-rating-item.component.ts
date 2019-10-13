import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ZonkyRealDataService} from '../../../services/zonky-real-data.service';
import {PercenteRatingService} from '../../../services/percente-rating.service';

@Component({
  selector: 'app-annual-rating-item',
  templateUrl: './annual-rating-item.component.html',
  styleUrls: ['./annual-rating-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnnualRatingItemComponent {

  @Input() value;

  constructor(private zonkyRealDataService: ZonkyRealDataService,
              private percentToRatingService: PercenteRatingService) {
  }

  ratingClicked() {
    this.zonkyRealDataService
      .getLoansAverageAccordingToRating(this.percentToRatingService.getRatingFromPercentage(this.value), this.value);
  }
}

