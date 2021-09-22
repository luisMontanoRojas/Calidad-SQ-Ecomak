import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAddCategoriaComponent } from './adm-add-categoria.component';

describe('AdmAddCategoriaComponent', () => {
  let component: AdmAddCategoriaComponent;
  let fixture: ComponentFixture<AdmAddCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAddCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAddCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
