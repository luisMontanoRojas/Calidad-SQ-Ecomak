import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListTrsComponent } from './usr-list-trs.component';

describe('UsrListTrsComponent', () => {
  let component: UsrListTrsComponent;
  let fixture: ComponentFixture<UsrListTrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListTrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListTrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
