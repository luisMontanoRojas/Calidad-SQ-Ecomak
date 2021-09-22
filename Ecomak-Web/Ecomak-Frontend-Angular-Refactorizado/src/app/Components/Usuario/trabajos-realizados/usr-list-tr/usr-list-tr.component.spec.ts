import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListTrComponent } from './usr-list-tr.component';

describe('UsrListTrComponent', () => {
  let component: UsrListTrComponent;
  let fixture: ComponentFixture<UsrListTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
