import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditCommentComponent } from './adm-edit-comment.component';

describe('AdmEditCommentComponent', () => {
  let component: AdmEditCommentComponent;
  let fixture: ComponentFixture<AdmEditCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
