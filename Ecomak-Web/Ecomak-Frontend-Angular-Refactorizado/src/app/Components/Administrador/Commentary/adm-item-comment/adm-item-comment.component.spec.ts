import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmItemCommentComponent } from './adm-item-comment.component';

describe('AdmItemCommentComponent', () => {
  let component: AdmItemCommentComponent;
  let fixture: ComponentFixture<AdmItemCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmItemCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmItemCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
