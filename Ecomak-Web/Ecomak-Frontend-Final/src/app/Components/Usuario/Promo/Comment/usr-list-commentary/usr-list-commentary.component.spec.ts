import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListCommentaryComponent } from './usr-list-commentary.component';

describe('UsrListCommentaryComponent', () => {
  let component: UsrListCommentaryComponent;
  let fixture: ComponentFixture<UsrListCommentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListCommentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
