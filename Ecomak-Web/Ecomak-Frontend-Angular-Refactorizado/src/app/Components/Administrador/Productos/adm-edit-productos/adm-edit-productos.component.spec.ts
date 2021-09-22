import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditProductosComponent } from './adm-edit-productos.component';

describe('AdmEditProductosComponent', () => {
  let component: AdmEditProductosComponent;
  let fixture: ComponentFixture<AdmEditProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
