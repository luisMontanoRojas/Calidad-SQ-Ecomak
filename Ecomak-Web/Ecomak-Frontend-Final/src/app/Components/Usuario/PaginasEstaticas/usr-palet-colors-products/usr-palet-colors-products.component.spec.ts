import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrPaletColorsProductsComponent } from './usr-palet-colors-products.component';

describe('UsrPaletColorsProductsComponent', () => {
  let component: UsrPaletColorsProductsComponent;
  let fixture: ComponentFixture<UsrPaletColorsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrPaletColorsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrPaletColorsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
