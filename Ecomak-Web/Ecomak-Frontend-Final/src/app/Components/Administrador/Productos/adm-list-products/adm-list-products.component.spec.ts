import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListProductsComponent } from './adm-list-products.component';

describe('AdmListProductsComponent', () => {
  let component: AdmListProductsComponent;
  let fixture: ComponentFixture<AdmListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
