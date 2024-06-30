import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistroComponent } from './registro/registro.component';
import { EmpleadosService } from './empleados.service';
import { FormsModule } from '@angular/forms';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';

@NgModule({
  declarations: [
    ListaEmpleadosComponent,
    RegistroComponent,
    PaginaInicioComponent
  ],
  imports: [
    CommonModule, FormsModule
  ], exports: [
    PaginaInicioComponent,
    ListaEmpleadosComponent,
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
