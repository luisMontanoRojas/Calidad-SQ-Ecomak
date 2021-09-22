import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAddCommentaryComponent } from './usr-add-commentary.component';

describe('UsrAddCommentaryComponent', () => {
  let component: UsrAddCommentaryComponent;
  let fixture: ComponentFixture<UsrAddCommentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAddCommentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAddCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
