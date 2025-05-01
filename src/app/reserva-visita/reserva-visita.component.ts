import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-visita',
  templateUrl: './reserva-visita.component.html',
  styleUrls: ['./reserva-visita.component.css']
})
export class ReservaVisitaComponent {
  codigo: string = '';
  fecha: Date = new Date();
  numeroVisitantes: number = 0;
  tipoRecorrido: 'guiado' | 'libre' = 'libre';

  constructor() {}

  esAltaDemanda(): boolean {
    const dia = this.fecha.getDay();
    return dia === 0 || dia === 6; // domingo o sábado
  }

  getPrecioTotal(): number {
    const base = this.tipoRecorrido === 'guiado' ? 10 : 5;
    let precio = base * this.numeroVisitantes;

    if (this.numeroVisitantes > 10) {
      precio *= 0.9; // descuento
    }

    if (this.esAltaDemanda()) {
      precio *= 1.2; // recargo
    }

    return precio;
  }
}
