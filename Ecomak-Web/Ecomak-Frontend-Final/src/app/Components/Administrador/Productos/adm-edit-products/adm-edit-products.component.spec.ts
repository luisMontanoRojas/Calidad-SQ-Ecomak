import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditProductsComponent } from './adm-edit-products.component';

describe('AdmEditProductsComponent', () => {
  let component: AdmEditProductsComponent;
  let fixture: ComponentFixture<AdmEditProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
