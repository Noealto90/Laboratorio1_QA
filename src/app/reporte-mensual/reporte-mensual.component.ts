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
  mes: number = new Date().getMonth(); // 0 a 11
  anio: number = new Date().getFullYear();
  animales: AnimalComponent[] = [];
  reservas: ReservaVisitaComponent[] = [];
  tratamientos: TratamientoVeterinarioComponent[] = [];

  constructor() {}

  contarAnimalesNuevos(): number {
    return this.animales.filter(a =>
      a.fechaIngreso.getMonth() === this.mes &&
      a.fechaIngreso.getFullYear() === this.anio
    ).length;
  }

  totalVisitantes(): number {
    return this.reservas
      .filter(r =>
        r.fecha.getMonth() === this.mes &&
        r.fecha.getFullYear() === this.anio
      )
      .reduce((acc, r) => acc + r.numeroVisitantes, 0);
  }

  animalesTratados(): AnimalComponent[] {
    const tratados = this.tratamientos
      .filter(t =>
        t.getFechaFin().getMonth() === this.mes &&
        t.getFechaFin().getFullYear() === this.anio
      )
      .map(t => t.animal);

    return Array.from(new Set(tratados));
  }

  resumen(): string {
    return `Mes: ${this.mes + 1}/${this.anio}
Animales nuevos: ${this.contarAnimalesNuevos()}
Total visitantes: ${this.totalVisitantes()}
Animales tratados: ${this.animalesTratados().length}`;
  }
}
