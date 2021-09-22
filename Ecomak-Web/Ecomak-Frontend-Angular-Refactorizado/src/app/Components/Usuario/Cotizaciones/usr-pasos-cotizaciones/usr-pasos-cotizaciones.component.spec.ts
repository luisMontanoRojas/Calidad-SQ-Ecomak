import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrPasosCotizacionesComponent } from './usr-pasos-cotizaciones.component';

describe('UsrPasosCotizacionesComponent', () => {
  let component: UsrPasosCotizacionesComponent;
  let fixture: ComponentFixture<UsrPasosCotizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrPasosCotizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrPasosCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
