import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrHomePageComponent } from './usr-home-page.component';

describe('UsrHomePageComponent', () => {
  let component: UsrHomePageComponent;
  let fixture: ComponentFixture<UsrHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
