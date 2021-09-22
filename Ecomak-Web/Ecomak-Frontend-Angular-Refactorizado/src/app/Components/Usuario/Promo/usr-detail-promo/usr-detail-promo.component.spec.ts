import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDetailPromoComponent } from './usr-detail-promo.component';

describe('UsrDetailPromoComponent', () => {
  let component: UsrDetailPromoComponent;
  let fixture: ComponentFixture<UsrDetailPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrDetailPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrDetailPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
