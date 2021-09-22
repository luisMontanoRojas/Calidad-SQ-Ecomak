import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrTablaEmpresasComponent } from './usr-tabla-empresas.component';

describe('UsrTablaEmpresasComponent', () => {
  let component: UsrTablaEmpresasComponent;
  let fixture: ComponentFixture<UsrTablaEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrTablaEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrTablaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
