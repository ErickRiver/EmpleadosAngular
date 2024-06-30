import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
   // Elementos privados deben empezar con guion bajo
    private _empleados: IEmpleado[] = [];

   // Creamos un metodo get para tener acceso a la lista de empleados
    get empleados(): IEmpleado[] {
      return this._empleados;
    }

   // Metodo agregarCliente para agregar un nuevo empleado a la lista 
    agregarEmpleado(empleado: IEmpleado) {
      this._empleados.push(empleado);
      // Guardamos la lista de clientes en el localstorage
      localStorage.setItem('empleados', JSON.stringify(this._empleados));
    }

    constructor() { 
     // Recuperamos la lista del localstorage
      this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
    }
}
