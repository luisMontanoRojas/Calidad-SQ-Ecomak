import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDetalleProductoTrComponent } from './adm-detalle-producto-tr.component';

describe('AdmDetalleProductoTrComponent', () => {
  let component: AdmDetalleProductoTrComponent;
  let fixture: ComponentFixture<AdmDetalleProductoTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDetalleProductoTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDetalleProductoTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
