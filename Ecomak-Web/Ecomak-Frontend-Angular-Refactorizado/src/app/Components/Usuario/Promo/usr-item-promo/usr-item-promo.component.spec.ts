import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrItemPromoComponent } from './usr-item-promo.component';

describe('UsrItemPromoComponent', () => {
  let component: UsrItemPromoComponent;
  let fixture: ComponentFixture<UsrItemPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrItemPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrItemPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
