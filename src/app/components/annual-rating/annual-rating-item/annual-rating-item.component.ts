import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-annual-rating-item',
  templateUrl: './annual-rating-item.component.html',
  styleUrls: ['./annual-rating-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnnualRatingItemComponent implements OnInit {
  @Input() value;

  constructor() {
  }

  ngOnInit() {
  }

}
