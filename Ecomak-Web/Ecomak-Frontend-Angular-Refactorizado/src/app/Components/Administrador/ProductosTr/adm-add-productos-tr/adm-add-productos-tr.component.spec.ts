import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAddProductosTrComponent } from './adm-add-productos-tr.component';

describe('AdmAddProductosTrComponent', () => {
  let component: AdmAddProductosTrComponent;
  let fixture: ComponentFixture<AdmAddProductosTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAddProductosTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddProductosTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
