import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarHorarioComponent } from './form-agregar-horario.component';

describe('FormAgregarHorarioComponent', () => {
  let component: FormAgregarHorarioComponent;
  let fixture: ComponentFixture<FormAgregarHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgregarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
