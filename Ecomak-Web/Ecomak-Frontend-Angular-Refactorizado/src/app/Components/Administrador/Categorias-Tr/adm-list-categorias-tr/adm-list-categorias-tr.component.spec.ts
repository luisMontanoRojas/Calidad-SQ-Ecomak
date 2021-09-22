import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListCategoriasTrComponent } from './adm-list-categorias-tr.component';

describe('AdmListCategoriasTrComponent', () => {
  let component: AdmListCategoriasTrComponent;
  let fixture: ComponentFixture<AdmListCategoriasTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListCategoriasTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListCategoriasTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
