import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosDiamanteComponent } from './espacios-diamante.component';

describe('EspaciosDiamanteComponent', () => {
  let component: EspaciosDiamanteComponent;
  let fixture: ComponentFixture<EspaciosDiamanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaciosDiamanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaciosDiamanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
