import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrPasosCotizacionComponent } from './usr-pasos-cotizacion.component';

describe('UsrPasosCotizacionComponent', () => {
  let component: UsrPasosCotizacionComponent;
  let fixture: ComponentFixture<UsrPasosCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrPasosCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrPasosCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
