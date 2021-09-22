import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrContactoComponent } from './usr-contacto.component';

describe('UsrContactoComponent', () => {
  let component: UsrContactoComponent;
  let fixture: ComponentFixture<UsrContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
