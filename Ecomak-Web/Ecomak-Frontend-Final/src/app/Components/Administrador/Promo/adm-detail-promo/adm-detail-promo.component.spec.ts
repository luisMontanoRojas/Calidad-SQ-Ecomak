import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDetailPromoComponent } from './adm-detail-promo.component';

describe('AdmDetailPromoComponent', () => {
  let component: AdmDetailPromoComponent;
  let fixture: ComponentFixture<AdmDetailPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDetailPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDetailPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
