import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListSubscripcionesComponent } from './adm-list-subscripciones.component';

describe('AdmListSubscripcionesComponent', () => {
  let component: AdmListSubscripcionesComponent;
  let fixture: ComponentFixture<AdmListSubscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListSubscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListSubscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
