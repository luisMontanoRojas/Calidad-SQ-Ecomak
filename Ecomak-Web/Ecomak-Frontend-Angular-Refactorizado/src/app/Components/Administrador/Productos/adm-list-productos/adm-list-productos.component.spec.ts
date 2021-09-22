import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListProductosComponent } from './adm-list-productos.component';

describe('AdmListProductosComponent', () => {
  let component: AdmListProductosComponent;
  let fixture: ComponentFixture<AdmListProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
