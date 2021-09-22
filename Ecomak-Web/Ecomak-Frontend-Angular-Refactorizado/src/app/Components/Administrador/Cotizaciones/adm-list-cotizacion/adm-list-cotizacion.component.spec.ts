import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListCotizacionComponent } from './adm-list-cotizacion.component';

describe('AdmListCotizacionComponent', () => {
  let component: AdmListCotizacionComponent;
  let fixture: ComponentFixture<AdmListCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
