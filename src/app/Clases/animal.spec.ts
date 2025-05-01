import { Animal } from '../Clases/animal';

describe('Animal', () => {
  describe('esJoven()', () => {
    it('debería retornar true cuando el animal tiene menos de 2 años (CP03)', () => {
      // Configuración para CP03 (menos de 2 años)
      const fechaIngreso = new Date(2024, 6, 1); // Julio 2024
      const animal = new Animal(
        'A001',
        'Max',
        'Perro',
        fechaIngreso,
        8,
        'Estable'
      );
      
      expect(animal.esJoven()).toBe(true);
    });

    it('debería retornar false cuando el animal tiene más de 2 años (CP04)', () => {
      // Configuración para CP04 (más de 2 años)
      const fechaIngreso = new Date(2021, 3, 1);
      const animal = new Animal(
        'A002',
        'Luna',
        'Gato',
        fechaIngreso,
        4,
        'Estable'
      );
      
      expect(animal.esJoven()).toBe(false);
    });
  });


});