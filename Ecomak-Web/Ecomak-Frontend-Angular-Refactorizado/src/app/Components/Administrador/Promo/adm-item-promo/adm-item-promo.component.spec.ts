import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmItemPromoComponent } from './adm-item-promo.component';

describe('AdmItemPromoComponent', () => {
  let component: AdmItemPromoComponent;
  let fixture: ComponentFixture<AdmItemPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmItemPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmItemPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
