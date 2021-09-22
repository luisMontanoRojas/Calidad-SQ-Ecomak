import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAddProductsComponent } from './adm-add-products.component';

describe('AdmAddProductsComponent', () => {
  let component: AdmAddProductsComponent;
  let fixture: ComponentFixture<AdmAddProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAddProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
