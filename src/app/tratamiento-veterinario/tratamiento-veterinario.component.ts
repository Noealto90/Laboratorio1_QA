import { Component } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';

@Component({
  selector: 'app-tratamiento-veterinario',
  templateUrl: './tratamiento-veterinario.component.html',
  styleUrls: ['./tratamiento-veterinario.component.css']
})
export class TratamientoVeterinarioComponent {
  codigo: string = '';
  animal: AnimalComponent = new AnimalComponent();
  descripcion: string = '';
  fechaInicio: Date = new Date();
  duracionDias: number = 0;
  costoDiario: number = 0;

  constructor() {}

  getFechaFin(): Date {
    const fin = new Date(this.fechaInicio);
    fin.setDate(fin.getDate() + this.duracionDias);
    return fin;
  }

  getCostoTotal(): number {
    let costo = this.duracionDias * this.costoDiario;
    if (this.animal.necesitaAtencion()) {
      costo *= 1.25;
    }
    return costo;
  }
}
