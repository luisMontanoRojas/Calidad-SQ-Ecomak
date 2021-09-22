import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrItemProductosComponent } from './usr-item-productos.component';

describe('UsrItemProductosComponent', () => {
  let component: UsrItemProductosComponent;
  let fixture: ComponentFixture<UsrItemProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrItemProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrItemProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
