import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAddProductosComponent } from './adm-add-productos.component';

describe('AdmAddProductosComponent', () => {
  let component: AdmAddProductosComponent;
  let fixture: ComponentFixture<AdmAddProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAddProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
