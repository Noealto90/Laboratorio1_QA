import { ReservaVisita } from '../Clases/reserva-visita';

describe('ReservaVisita', () => {
  describe('esAltaDemanda()', () => {
    it('debería retornar true cuando la reserva es fin de semana (sábado/domingo) - CP01', () => {
      // CP01: Sábado 5 de abril 2025 (getDay() = 6)
      const fechaSabado = new Date(2025, 3, 5); 
      const reserva = new ReservaVisita(
        'R-001',
        fechaSabado,
        4,
        'Guiado'
      );
      
      expect(reserva.esAltaDemanda()).toBe(true);
    });

    it('debería retornar false cuando la reserva es día entre semana - CP02', () => {
      // CP02: Miércoles 9 de abril 2025 (getDay() = 3)
      const fechaMiercoles = new Date(2025, 3, 9); 
      const reserva = new ReservaVisita(
        'R-002',
        fechaMiercoles,
        2,
        'Libre'
      );
      
      expect(reserva.esAltaDemanda()).toBe(false);
    });
  });

});