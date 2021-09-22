import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrNavbarComponent } from './usr-navbar.component';

describe('UsrNavbarComponent', () => {
  let component: UsrNavbarComponent;
  let fixture: ComponentFixture<UsrNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
