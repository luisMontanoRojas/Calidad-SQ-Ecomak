import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrQuienesSomosComponent } from './usr-quienes-somos.component';

describe('UsrQuienesSomosComponent', () => {
  let component: UsrQuienesSomosComponent;
  let fixture: ComponentFixture<UsrQuienesSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrQuienesSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
