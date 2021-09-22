import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListPromoComponent } from './usr-list-promo.component';

describe('UsrListPromoComponent', () => {
  let component: UsrListPromoComponent;
  let fixture: ComponentFixture<UsrListPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
