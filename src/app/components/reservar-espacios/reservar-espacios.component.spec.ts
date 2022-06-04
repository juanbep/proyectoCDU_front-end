import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarEspaciosComponent } from './reservar-espacios.component';

describe('ReservarEspaciosComponent', () => {
  let component: ReservarEspaciosComponent;
  let fixture: ComponentFixture<ReservarEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarEspaciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
