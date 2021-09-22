import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDetalleCotizacionComponent } from './adm-detalle-cotizacion.component';

describe('AdmDetalleCotizacionComponent', () => {
  let component: AdmDetalleCotizacionComponent;
  let fixture: ComponentFixture<AdmDetalleCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDetalleCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDetalleCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
