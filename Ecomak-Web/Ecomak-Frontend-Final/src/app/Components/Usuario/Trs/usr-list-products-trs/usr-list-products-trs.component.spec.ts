import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListProductsTrsComponent } from './usr-list-products-trs.component';

describe('UsrListProductsTrsComponent', () => {
  let component: UsrListProductsTrsComponent;
  let fixture: ComponentFixture<UsrListProductsTrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListProductsTrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListProductsTrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
