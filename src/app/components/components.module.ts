import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnualRatingComponent} from './annual-rating/annual-rating.component';
import {HeaderComponent} from './header/header.component';
import {AnnualRatingItemComponent} from './annual-rating/annual-rating-item/annual-rating-item.component';


@NgModule({
  declarations: [
    AnnualRatingComponent,
    HeaderComponent,
    AnnualRatingItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnnualRatingComponent,
    HeaderComponent
  ]
})
export class ComponentsModule {
}
