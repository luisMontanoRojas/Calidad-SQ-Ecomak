import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAddPromoComponent } from './adm-add-promo.component';

describe('AdmAddPromoComponent', () => {
  let component: AdmAddPromoComponent;
  let fixture: ComponentFixture<AdmAddPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAddPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
