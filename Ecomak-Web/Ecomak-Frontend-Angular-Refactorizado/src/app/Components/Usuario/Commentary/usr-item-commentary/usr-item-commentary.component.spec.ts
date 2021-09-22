import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrItemCommentaryComponent } from './usr-item-commentary.component';

describe('UsrItemCommentaryComponent', () => {
  let component: UsrItemCommentaryComponent;
  let fixture: ComponentFixture<UsrItemCommentaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrItemCommentaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrItemCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
