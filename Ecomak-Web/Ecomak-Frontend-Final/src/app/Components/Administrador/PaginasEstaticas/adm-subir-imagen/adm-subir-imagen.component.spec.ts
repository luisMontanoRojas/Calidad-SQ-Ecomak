import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSubirImagenComponent } from './adm-subir-imagen.component';

describe('AdmSubirImagenComponent', () => {
  let component: AdmSubirImagenComponent;
  let fixture: ComponentFixture<AdmSubirImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmSubirImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSubirImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
