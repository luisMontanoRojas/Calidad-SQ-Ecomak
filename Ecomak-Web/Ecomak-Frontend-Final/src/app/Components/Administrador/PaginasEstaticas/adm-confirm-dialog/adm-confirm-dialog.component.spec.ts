import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmConfirmDialogComponent } from './adm-confirm-dialog.component';

describe('AdmConfirmDialogComponent', () => {
  let component: AdmConfirmDialogComponent;
  let fixture: ComponentFixture<AdmConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
