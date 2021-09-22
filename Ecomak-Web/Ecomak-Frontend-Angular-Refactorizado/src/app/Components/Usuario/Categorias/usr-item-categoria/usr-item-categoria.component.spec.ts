import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrItemCategoriaComponent } from './usr-item-categoria.component';

describe('UsrItemCategoriaComponent', () => {
  let component: UsrItemCategoriaComponent;
  let fixture: ComponentFixture<UsrItemCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrItemCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrItemCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
