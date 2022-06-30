import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarGestionEscenarioComponent } from './form-editar-gestion-escenario.component';

describe('FormEditarGestionEscenarioComponent', () => {
  let component: FormEditarGestionEscenarioComponent;
  let fixture: ComponentFixture<FormEditarGestionEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditarGestionEscenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditarGestionEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
