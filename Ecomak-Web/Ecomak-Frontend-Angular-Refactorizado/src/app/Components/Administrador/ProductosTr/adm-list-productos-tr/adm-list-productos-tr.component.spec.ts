import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListProductosTrComponent } from './adm-list-productos-tr.component';

describe('AdmListProductosTrComponent', () => {
  let component: AdmListProductosTrComponent;
  let fixture: ComponentFixture<AdmListProductosTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListProductosTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListProductosTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
