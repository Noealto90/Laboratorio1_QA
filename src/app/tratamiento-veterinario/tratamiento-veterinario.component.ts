// src/app/tratamiento-veterinario/tratamiento-veterinario.component.ts
import { Component } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';

@Component({
  selector: 'app-tratamiento-veterinario',
  standalone: true,
  imports: [AnimalComponent],
  templateUrl: './tratamiento-veterinario.component.html',
  styleUrls: ['./tratamiento-veterinario.component.css']
})
export class TratamientoVeterinarioComponent {
  private codigo: string = '';
  private animal: AnimalComponent = new AnimalComponent();
  private descripcion: string = '';
  private fechaInicio: Date = new Date();
  private duracionDias: number = 0;
  private costoDiario: number = 0;

  constructor() {}

  getCodigo(): string {
    return this.codigo;
  }
  setCodigo(codigo: string): void {
    this.codigo = codigo;
  }

  getAnimal(): AnimalComponent {
    return this.animal;
  }
  setAnimal(animal: AnimalComponent): void {
    this.animal = animal;
  }

  getDescripcion(): string {
    return this.descripcion;
  }
  setDescripcion(desc: string): void {
    this.descripcion = desc;
  }

  getFechaInicio(): Date {
    return this.fechaInicio;
  }
  setFechaInicio(fecha: Date): void {
    this.fechaInicio = fecha;
  }

  getDuracionDias(): number {
    return this.duracionDias;
  }
  setDuracionDias(dias: number): void {
    this.duracionDias = dias;
  }

  getCostoDiario(): number {
    return this.costoDiario;
  }
  setCostoDiario(costo: number): void {
    this.costoDiario = costo;
  }
  
  /**
   * Calcula el costo total del tratamiento.
   * @returns duracionDias * costoDiario
   */
  costoTotal(): number {
    return this.duracionDias * this.costoDiario;
  }
}
