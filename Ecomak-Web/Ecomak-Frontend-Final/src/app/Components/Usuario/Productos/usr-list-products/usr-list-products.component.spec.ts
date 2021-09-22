import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListProductsComponent } from './usr-list-products.component';

describe('UsrListProductsComponent', () => {
  let component: UsrListProductsComponent;
  let fixture: ComponentFixture<UsrListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
