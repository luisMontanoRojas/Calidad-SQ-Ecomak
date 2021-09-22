import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListCategoriaComponent } from './adm-list-categoria.component';

describe('AdmListCategoriaComponent', () => {
  let component: AdmListCategoriaComponent;
  let fixture: ComponentFixture<AdmListCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
