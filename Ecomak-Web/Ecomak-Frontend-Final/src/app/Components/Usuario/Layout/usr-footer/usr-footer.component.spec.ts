import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrFooterComponent } from './usr-footer.component';

describe('UsrFooterComponent', () => {
  let component: UsrFooterComponent;
  let fixture: ComponentFixture<UsrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
