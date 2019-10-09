import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnnualRatingItemComponent} from './annual-rating-item.component';

describe('AnnualRatingItemComponent', () => {
  let component: AnnualRatingItemComponent;
  let fixture: ComponentFixture<AnnualRatingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualRatingItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualRatingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
