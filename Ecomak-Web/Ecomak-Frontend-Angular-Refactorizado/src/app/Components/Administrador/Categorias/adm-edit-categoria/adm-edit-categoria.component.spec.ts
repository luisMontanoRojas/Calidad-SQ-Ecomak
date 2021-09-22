import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditCategoriaComponent } from './adm-edit-categoria.component';

describe('AdmEditCategoriaComponent', () => {
  let component: AdmEditCategoriaComponent;
  let fixture: ComponentFixture<AdmEditCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
