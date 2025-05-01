import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-visita',
  templateUrl: './reserva-visita.component.html',
  styleUrls: ['./reserva-visita.component.css']
})
export class ReservaVisitaComponent {
  private codigo: string = '';
  private fecha: Date = new Date();
  private numeroVisitantes: number = 0;
  private tipoRecorrido: string = 'libre';

  constructor() {}

  getCodigo(): string {
    return this.codigo;
  }

  setCodigo(codigo: string): void {
    this.codigo = codigo;
  }

  getFecha(): Date {
    return this.fecha;
  }

  setFecha(fecha: Date): void {
    this.fecha = fecha;
  }

  getNumeroVisitantes(): number {
    return this.numeroVisitantes;
  }

  setNumeroVisitantes(numero: number): void {
    this.numeroVisitantes = numero;
  }

  getTipoRecorrido(): string {
    return this.tipoRecorrido;
  }

  setTipoRecorrido(tipo: string): void {
    this.tipoRecorrido = tipo;
  }

  esAltaDemanda(): boolean {
    const dia = this.fecha.getDay();
    return dia === 0 || dia === 6; // domingo o sábado
  }
}
