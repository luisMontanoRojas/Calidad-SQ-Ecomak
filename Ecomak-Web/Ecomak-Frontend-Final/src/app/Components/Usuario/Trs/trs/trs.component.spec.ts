import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsComponent } from './trs.component';

describe('TrsComponent', () => {
  let component: TrsComponent;
  let fixture: ComponentFixture<TrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
