import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrItemTrComponent } from './usr-item-tr.component';

describe('UsrItemTrComponent', () => {
  let component: UsrItemTrComponent;
  let fixture: ComponentFixture<UsrItemTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrItemTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrItemTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
