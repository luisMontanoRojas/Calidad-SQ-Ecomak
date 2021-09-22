import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrSubirImagenComponent } from './usr-subir-imagen.component';

describe('UsrSubirImagenComponent', () => {
  let component: UsrSubirImagenComponent;
  let fixture: ComponentFixture<UsrSubirImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrSubirImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrSubirImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
