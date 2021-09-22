import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrDialogImageComponent } from './usr-dialog-image.component';

describe('UsrDialogImageComponent', () => {
  let component: UsrDialogImageComponent;
  let fixture: ComponentFixture<UsrDialogImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrDialogImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrDialogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
