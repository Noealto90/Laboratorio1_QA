import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVisitaComponent } from './reserva-visita.component';

describe('ReservaVisitaComponent', () => {
  let component: ReservaVisitaComponent;
  let fixture: ComponentFixture<ReservaVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaVisitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
