import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  @Input()
  empleados: IEmpleado[] = [];

  // Creamos un objeto de tipo ICliente
  nuevoEmpleado: IEmpleado = {
    numero: 0,
    nombre: "",
    correo: "",
    telefono: "",
    fechaNacimiento:  new Date(),
    sexo: ""
  }

  // Inyectamos el servicio de los clientes al componente.
  constructor(private EmpleadosService: EmpleadosService) {}
  
  agregarEmpleado() {
    //Validaciones
    if(this.nuevoEmpleado.nombre.trim().length === 0)
      return alert("Nombre vacío");

    if(this.nuevoEmpleado.correo.trim().length === 0)
      return alert("Correo vacío");

    if(this.nuevoEmpleado.telefono.trim().length === 0)
      return alert("Telefono vacío");

    if(this.nuevoEmpleado.sexo.trim().length === 0)
      return alert("Seleccione un sexo");

    // Agregmos el nuevo cliente a traves del servicio.
    this.EmpleadosService.agregarEmpleado(this.nuevoEmpleado);

    //limpiamos el formulario
    this.nuevoEmpleado = {
      numero: 0,
      nombre: "",
      correo: "",
      telefono: "",
      fechaNacimiento:  new Date(),
      sexo: ""
    };
  }
}
