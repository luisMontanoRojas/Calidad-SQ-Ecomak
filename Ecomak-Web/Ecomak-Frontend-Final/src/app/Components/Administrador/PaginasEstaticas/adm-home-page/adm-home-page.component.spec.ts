import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHomePageComponent } from './adm-home-page.component';

describe('AdmHomePageComponent', () => {
  let component: AdmHomePageComponent;
  let fixture: ComponentFixture<AdmHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
