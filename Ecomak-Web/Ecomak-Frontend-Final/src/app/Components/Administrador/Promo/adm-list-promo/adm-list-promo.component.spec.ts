import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListPromoComponent } from './adm-list-promo.component';

describe('AdmListPromoComponent', () => {
  let component: AdmListPromoComponent;
  let fixture: ComponentFixture<AdmListPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
