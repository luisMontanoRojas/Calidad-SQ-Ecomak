import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrListCategoriaComponent } from './usr-list-categoria.component';

describe('UsrListCategoriaComponent', () => {
  let component: UsrListCategoriaComponent;
  let fixture: ComponentFixture<UsrListCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrListCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrListCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
