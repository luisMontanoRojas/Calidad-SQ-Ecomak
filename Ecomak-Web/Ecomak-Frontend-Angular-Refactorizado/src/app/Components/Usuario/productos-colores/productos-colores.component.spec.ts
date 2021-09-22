import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosColoresComponent } from './productos-colores.component';

describe('ProductosColoresComponent', () => {
  let component: ProductosColoresComponent;
  let fixture: ComponentFixture<ProductosColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosColoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
