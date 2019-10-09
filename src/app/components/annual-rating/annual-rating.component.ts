import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ColorsService} from '../../services/colors.service';

@Component({
  selector: 'app-annual-rating',
  templateUrl: './annual-rating.component.html',
  styleUrls: ['./annual-rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnnualRatingComponent implements OnInit {

  constructor(public dataService: DataService,
              public colorService: ColorsService) {
  }

  ngOnInit() {
  }

}
