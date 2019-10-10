import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AnnualRatingService} from '../../services/annual-rating.service';
import {ColorsService} from './service/colors.service';
import {ZonkyRealDataService} from '../../services/zonky-real-data.service';

@Component({
  selector: 'app-annual-rating',
  templateUrl: './annual-rating.component.html',
  styleUrls: ['./annual-rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnnualRatingComponent implements OnInit {
  ratingSelected: string;
  resultLoanAverageAmount: any;

  constructor(public dataService: AnnualRatingService,
              public colorService: ColorsService,
              private zonkyRealDataService: ZonkyRealDataService) {
    this.ratingSelected = null;
    this.zonkyRealDataService.ratingButtonClicked.subscribe(rating => {
      this.ratingSelected = rating.toString();
    });
    this.zonkyRealDataService.averageLoanAmount.subscribe(resultLoanAverageAmount => {
      this.resultLoanAverageAmount = resultLoanAverageAmount;
    });
  }

  ngOnInit() {
  }

}
