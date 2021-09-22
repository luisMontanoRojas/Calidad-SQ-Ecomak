import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAddSubscriptorComponent } from './adm-add-subscriptor.component';

describe('AdmAddSubscriptorComponent', () => {
  let component: AdmAddSubscriptorComponent;
  let fixture: ComponentFixture<AdmAddSubscriptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAddSubscriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddSubscriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
