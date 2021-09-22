import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditSubscripcionComponent } from './adm-edit-subscripcion.component';

describe('AdmEditSubscripcionComponent', () => {
  let component: AdmEditSubscripcionComponent;
  let fixture: ComponentFixture<AdmEditSubscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditSubscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditSubscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
