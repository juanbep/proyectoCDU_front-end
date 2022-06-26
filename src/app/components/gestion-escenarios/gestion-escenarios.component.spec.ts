import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEscenariosComponent } from './gestion-escenarios.component';

describe('GestionEscenariosComponent', () => {
  let component: GestionEscenariosComponent;
  let fixture: ComponentFixture<GestionEscenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEscenariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEscenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
