import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditPromoComponent } from './adm-edit-promo.component';

describe('AdmEditPromoComponent', () => {
  let component: AdmEditPromoComponent;
  let fixture: ComponentFixture<AdmEditPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
