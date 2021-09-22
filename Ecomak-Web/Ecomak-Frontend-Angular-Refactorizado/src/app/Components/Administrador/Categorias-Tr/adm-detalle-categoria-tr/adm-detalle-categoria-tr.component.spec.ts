import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDetalleCategoriaTrComponent } from './adm-detalle-categoria-tr.component';

describe('AdmDetalleCategoriaTrComponent', () => {
  let component: AdmDetalleCategoriaTrComponent;
  let fixture: ComponentFixture<AdmDetalleCategoriaTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDetalleCategoriaTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDetalleCategoriaTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
