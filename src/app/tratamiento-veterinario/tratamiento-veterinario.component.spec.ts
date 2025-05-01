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

  // --- Bloque nuevo para prueba parametrizada dinámica ---

  describe('fechaFin parametrizado dinámico', () => {
    let comp: TratamientoVeterinarioComponent;
    let fechaInicio: Date;

    beforeEach(() => {
      // Inicializa un nuevo componente y fija la fecha de inicio en "hoy"
      comp = new TratamientoVeterinarioComponent();
      fechaInicio = new Date();
      comp.setFechaInicio(fechaInicio);
    });

    afterEach(() => {
      // Limpieza tras cada prueba
      comp = null!;
    });

    const diasArr = [1, 5, 30];

    diasArr.forEach(dias => {
      it(`fechaFin(): ${dias} días después de fechaInicio dinámica`, () => {
        // Nombre: fechaFin-dinámica-${dias}d
        // Objetivo: verificar que fechaFin = fechaInicio + duracionDias
        // Datos de prueba: duracionDias = ${dias}, fechaInicio = ${fechaInicio.toDateString()}
        // Resultado esperado: fechaInicio + ${dias} días
        comp.setDuracionDias(dias);

        // Calcular fecha esperada dinámicamente
        const esperado = new Date(fechaInicio);
        esperado.setDate(esperado.getDate() + dias);

        expect(comp.fechaFin().toDateString()).toBe(esperado.toDateString());
      });
    });
  });
});
