import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnnualRatingComponent} from './annual-rating.component';

describe('AnnualRatingComponent', () => {
  let component: AnnualRatingComponent;
  let fixture: ComponentFixture<AnnualRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualRatingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
