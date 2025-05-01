import { Component } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent {
  private id: number = 0;
  private nombre: string = '';
  private fechaCreacion: Date = new Date();

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

  getFechaCreacion(): Date {
    return this.fechaCreacion;
  }

  setFechaCreacion(fecha: Date): void {
    this.fechaCreacion = fecha;
  }
}
