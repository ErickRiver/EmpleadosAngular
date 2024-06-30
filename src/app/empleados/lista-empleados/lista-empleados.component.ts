import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {
  // Inyectamos el servicio de los empleados al componente.
  constructor(private EmpleadosService: EmpleadosService) {}

  // Definimos un metodo get para obtener la lista de empleados desde el servicio.
  get empleados(): IEmpleado[] {
    return this.EmpleadosService.empleados;
  }
}
