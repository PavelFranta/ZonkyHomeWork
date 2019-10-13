import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnualRatingComponent} from './annual-rating/annual-rating.component';
import {HeaderComponent} from './header/header.component';
import {AnnualRatingItemComponent} from './annual-rating/annual-rating-item/annual-rating-item.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    AnnualRatingComponent,
    HeaderComponent,
    AnnualRatingItemComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AnnualRatingComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule {
}
