import { Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  private id: number = 0;
  private nombre: string = '';
  private especie: string = '';
  private fechaIngreso: Date = new Date();
  private peso: number = 0;
  private estadoSalud: string = '';

  constructor() {}

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getEspecie(): string {
    return this.especie;
  }

  setEspecie(especie: string): void {
    this.especie = especie;
  }

  getFechaIngreso(): Date {
    return this.fechaIngreso;
  }

  setFechaIngreso(fecha: Date): void {
    this.fechaIngreso = fecha;
  }

  getPeso(): number {
    return this.peso;
  }

  setPeso(peso: number): void {
    this.peso = peso;
  }

  getEstadoSalud(): string {
    return this.estadoSalud;
  }

  setEstadoSalud(estado: string): void {
    this.estadoSalud = estado;
  }

  esJoven(): boolean {
    const hoy = new Date();
    const anios = hoy.getFullYear() - this.fechaIngreso.getFullYear();
    const meses = hoy.getMonth() - this.fechaIngreso.getMonth();
    return anios < 2 || (anios === 2 && meses < 0);
  }
}
