import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListProductoTrComponent } from './usr-list-producto-tr.component';

describe('UsrListProductoTrComponent', () => {
  let component: UsrListProductoTrComponent;
  let fixture: ComponentFixture<UsrListProductoTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListProductoTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListProductoTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
