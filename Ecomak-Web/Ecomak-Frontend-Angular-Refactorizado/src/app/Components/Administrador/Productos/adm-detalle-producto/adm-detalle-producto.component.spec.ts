import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDetalleProductoComponent } from './adm-detalle-producto.component';

describe('AdmDetalleProductoComponent', () => {
  let component: AdmDetalleProductoComponent;
  let fixture: ComponentFixture<AdmDetalleProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDetalleProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
