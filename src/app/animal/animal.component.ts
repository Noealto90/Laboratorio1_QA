import { Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  id: number = 0;
  nombre: string = '';
  especie: string = '';
  fechaIngreso: Date = new Date();
  peso: number = 0;
  estadoSalud: string = '';

  constructor() {}

  esJoven(): boolean {
    const hoy = new Date();
    const anios = hoy.getFullYear() - this.fechaIngreso.getFullYear();
    const meses = hoy.getMonth() - this.fechaIngreso.getMonth();
    return anios < 2 || (anios === 2 && meses < 0);
  }

  necesitaAtencion(): boolean {
    return this.estadoSalud === 'malo' || this.peso < 10;
  }
}
