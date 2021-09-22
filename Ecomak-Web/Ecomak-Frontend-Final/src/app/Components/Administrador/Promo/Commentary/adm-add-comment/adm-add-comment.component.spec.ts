import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAddCommentComponent } from './adm-add-comment.component';

describe('AdmAddCommentComponent', () => {
  let component: AdmAddCommentComponent;
  let fixture: ComponentFixture<AdmAddCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAddCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
