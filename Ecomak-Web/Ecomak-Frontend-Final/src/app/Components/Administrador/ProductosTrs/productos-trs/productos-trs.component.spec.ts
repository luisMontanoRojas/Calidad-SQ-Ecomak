import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTrsComponent } from './productos-trs.component';

describe('ProductosTrsComponent', () => {
  let component: ProductosTrsComponent;
  let fixture: ComponentFixture<ProductosTrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosTrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosTrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
