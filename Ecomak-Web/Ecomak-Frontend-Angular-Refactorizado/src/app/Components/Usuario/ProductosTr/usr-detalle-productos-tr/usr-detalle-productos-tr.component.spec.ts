import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDetalleProductosTrComponent } from './usr-detalle-productos-tr.component';

describe('UsrDetalleProductosTrComponent', () => {
  let component: UsrDetalleProductosTrComponent;
  let fixture: ComponentFixture<UsrDetalleProductosTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrDetalleProductosTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrDetalleProductosTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
