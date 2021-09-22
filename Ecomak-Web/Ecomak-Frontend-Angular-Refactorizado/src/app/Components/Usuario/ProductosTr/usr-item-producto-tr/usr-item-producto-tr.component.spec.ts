import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrItemProductoTrComponent } from './usr-item-producto-tr.component';

describe('UsrItemProductoTrComponent', () => {
  let component: UsrItemProductoTrComponent;
  let fixture: ComponentFixture<UsrItemProductoTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrItemProductoTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrItemProductoTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
