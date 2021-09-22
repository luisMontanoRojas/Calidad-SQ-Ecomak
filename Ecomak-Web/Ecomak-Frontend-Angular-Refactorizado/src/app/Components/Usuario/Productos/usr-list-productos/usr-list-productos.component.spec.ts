import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListProductosComponent } from './usr-list-productos.component';

describe('UsrListProductosComponent', () => {
  let component: UsrListProductosComponent;
  let fixture: ComponentFixture<UsrListProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
