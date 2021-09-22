import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDetailProductComponent } from './usr-detail-product.component';

describe('UsrDetailProductComponent', () => {
  let component: UsrDetailProductComponent;
  let fixture: ComponentFixture<UsrDetailProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrDetailProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
