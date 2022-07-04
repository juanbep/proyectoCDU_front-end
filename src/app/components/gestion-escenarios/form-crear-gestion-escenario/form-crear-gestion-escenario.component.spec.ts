import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearGestionEscenarioComponent } from './form-crear-gestion-escenario.component';

describe('FormCrearGestionEscenarioComponent', () => {
  let component: FormCrearGestionEscenarioComponent;
  let fixture: ComponentFixture<FormCrearGestionEscenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCrearGestionEscenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearGestionEscenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
