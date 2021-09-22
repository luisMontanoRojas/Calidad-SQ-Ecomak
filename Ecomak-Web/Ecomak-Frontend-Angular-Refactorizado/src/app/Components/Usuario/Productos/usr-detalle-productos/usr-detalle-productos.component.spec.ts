import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDetalleProductosComponent } from './usr-detalle-productos.component';

describe('UsrDetalleProductosComponent', () => {
  let component: UsrDetalleProductosComponent;
  let fixture: ComponentFixture<UsrDetalleProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrDetalleProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrDetalleProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
