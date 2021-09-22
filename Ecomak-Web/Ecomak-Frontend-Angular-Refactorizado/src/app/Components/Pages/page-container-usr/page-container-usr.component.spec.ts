import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainerUsrComponent } from './page-container-usr.component';

describe('PageContainerUsrComponent', () => {
  let component: PageContainerUsrComponent;
  let fixture: ComponentFixture<PageContainerUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContainerUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContainerUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
