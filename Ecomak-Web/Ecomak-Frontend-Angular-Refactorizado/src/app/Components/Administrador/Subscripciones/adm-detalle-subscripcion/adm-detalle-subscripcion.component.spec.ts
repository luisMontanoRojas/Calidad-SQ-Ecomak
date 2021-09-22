import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDetalleSubscripcionComponent } from './adm-detalle-subscripcion.component';

describe('AdmDetalleSubscripcionComponent', () => {
  let component: AdmDetalleSubscripcionComponent;
  let fixture: ComponentFixture<AdmDetalleSubscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDetalleSubscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDetalleSubscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
