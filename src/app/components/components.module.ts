import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnualRatingComponent} from './annual-rating/annual-rating.component';
import {HeaderComponent} from './header/header.component';
import {AnnualRatingItemComponent} from './annual-rating/annual-rating-item/annual-rating-item.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AnnualRatingComponent,
    HeaderComponent,
    AnnualRatingItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AnnualRatingComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule {
}
