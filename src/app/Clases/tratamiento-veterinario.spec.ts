import { TratamientoVeterinario } from '../Clases/tratamiento-veterinario';
import { Animal } from '../Clases/animal';

// Mock de Animal
class MockAnimal {
  necesitaAtencion(): boolean {
    return false; // Cambiado a false para pruebas "sin recargo"
  }
}

describe('TratamientoVeterinario', () => {
  let mockAnimal: Animal;

  beforeEach(() => {
    mockAnimal = new MockAnimal() as Animal;
  });

  // --- Pruebas parametrizadas para costoTotal() ---
  describe('costoTotal parametrizado ', () => {
    const casos = [
      { dias: 3,  diario: 50,  esperado: 150 },
      { dias: 0,  diario: 100, esperado: 0   },
      { dias: 10, diario: 20,  esperado: 200 }
    ];

    casos.forEach(({ dias, diario, esperado }) => {
      it(`costoTotal(): duracionDias=${dias}, costoDiario= ${diario} → ${diario}`, () => {
        const tratamiento = new TratamientoVeterinario(
          'T-001', 
          mockAnimal, 
          'Tratamiento estándar', 
          new Date(), 
          dias, 
          diario
        );
        
        expect(tratamiento.calcularCostoTotal()).toBe(esperado);
      });
    });
  });
});