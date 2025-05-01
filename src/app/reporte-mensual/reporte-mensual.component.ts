import { Component } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';
import { ReservaVisitaComponent } from '../reserva-visita/reserva-visita.component';
import { TratamientoVeterinarioComponent } from '../tratamiento-veterinario/tratamiento-veterinario.component';

@Component({
  selector: 'app-reporte-mensual',
  templateUrl: './reporte-mensual.component.html',
  styleUrls: ['./reporte-mensual.component.css']
})
export class ReporteMensualComponent {
  private mes: number = new Date().getMonth();
  private anio: number = new Date().getFullYear();
  private animales: AnimalComponent[] = [];
  private reservas: ReservaVisitaComponent[] = [];
  private tratamientos: TratamientoVeterinarioComponent[] = [];

  constructor() {}

  getMes(): number {
    return this.mes;
  }

  setMes(mes: number): void {
    this.mes = mes;
  }

  getAnio(): number {
    return this.anio;
  }

  setAnio(anio: number): void {
    this.anio = anio;
  }

  getAnimales(): AnimalComponent[] {
    return this.animales;
  }

  setAnimales(animales: AnimalComponent[]): void {
    this.animales = animales;
  }

  getReservas(): ReservaVisitaComponent[] {
    return this.reservas;
  }

  setReservas(reservas: ReservaVisitaComponent[]): void {
    this.reservas = reservas;
  }

  getTratamientos(): TratamientoVeterinarioComponent[] {
    return this.tratamientos;
  }

  setTratamientos(tratamientos: TratamientoVeterinarioComponent[]): void {
    this.tratamientos = tratamientos;
  }
}
