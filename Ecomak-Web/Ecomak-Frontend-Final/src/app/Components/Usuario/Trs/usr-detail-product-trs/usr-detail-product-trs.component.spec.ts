import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDetailProductTrsComponent } from './usr-detail-product-trs.component';

describe('UsrDetailProductTrsComponent', () => {
  let component: UsrDetailProductTrsComponent;
  let fixture: ComponentFixture<UsrDetailProductTrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrDetailProductTrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrDetailProductTrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
