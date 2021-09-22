import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDetalleCategoriaComponent } from './adm-detalle-categoria.component';

describe('AdmDetalleCategoriaComponent', () => {
  let component: AdmDetalleCategoriaComponent;
  let fixture: ComponentFixture<AdmDetalleCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDetalleCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDetalleCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
