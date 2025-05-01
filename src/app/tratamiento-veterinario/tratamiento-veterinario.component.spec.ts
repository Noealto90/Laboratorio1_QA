// src/app/tratamiento-veterinario/tratamiento-veterinario.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TratamientoVeterinarioComponent } from './tratamiento-veterinario.component';

describe('TratamientoVeterinarioComponent', () => {
  let component: TratamientoVeterinarioComponent;
  let fixture: ComponentFixture<TratamientoVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratamientoVeterinarioComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TratamientoVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // --- Pruebas parametrizadas para costoTotal() ---
  describe('costoTotal parametrizado', () => {
    let comp: TratamientoVeterinarioComponent;

    beforeEach(() => {
      comp = new TratamientoVeterinarioComponent();
    });

    afterEach(() => {
      comp = null!;
    });

    const casos = [
      { dias: 0,  diario: 100, esperado: 0   },
      { dias: 3,  diario: 50,  esperado: 150 },
      { dias: 10, diario: 20,  esperado: 200 }
    ];

    casos.forEach(({ dias, diario, esperado }) => {
      it(
        `costoTotal(): duracionDias=${dias}, costoDiario=${diario} → ${esperado}`, 
        () => {
          // Nombre: costoTotal-${dias}d-${diario}cd
          // Objetivo: Verificar que costoTotal = duracionDias × costoDiario
          // Datos de prueba: duracionDias = ${dias}, costoDiario = ${diario}
          // Resultado esperado: ${esperado}
          comp.setDuracionDias(dias);
          comp.setCostoDiario(diario);
          expect(comp.costoTotal()).toBe(esperado);
        }
      );
    });
  });
});
