import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosCduComponent } from './espacios-cdu.component';

describe('EspaciosCduComponent', () => {
  let component: EspaciosCduComponent;
  let fixture: ComponentFixture<EspaciosCduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaciosCduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaciosCduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
