import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditProductosTrComponent } from './adm-edit-productos-tr.component';

describe('AdmEditProductosTrComponent', () => {
  let component: AdmEditProductosTrComponent;
  let fixture: ComponentFixture<AdmEditProductosTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditProductosTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditProductosTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
