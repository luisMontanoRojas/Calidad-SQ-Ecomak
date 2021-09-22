import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListCommentComponent } from './adm-list-comment.component';

describe('AdmListCommentComponent', () => {
  let component: AdmListCommentComponent;
  let fixture: ComponentFixture<AdmListCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
