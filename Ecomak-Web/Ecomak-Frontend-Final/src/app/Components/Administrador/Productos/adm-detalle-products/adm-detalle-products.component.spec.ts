import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDetalleProductsComponent } from './adm-detalle-products.component';

describe('AdmDetalleProductsComponent', () => {
  let component: AdmDetalleProductsComponent;
  let fixture: ComponentFixture<AdmDetalleProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDetalleProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDetalleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
