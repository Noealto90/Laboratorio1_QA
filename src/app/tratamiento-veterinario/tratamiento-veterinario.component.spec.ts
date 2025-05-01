import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoVeterinarioComponent } from './tratamiento-veterinario.component';

describe('TratamientoVeterinarioComponent', () => {
  let component: TratamientoVeterinarioComponent;
  let fixture: ComponentFixture<TratamientoVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratamientoVeterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
