import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './compartido/cabecera/titulo.component';
import { RegistroComponent } from './empleados/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosModule } from './empleados/empleados.module';
import { CompartidoModule } from './compartido/compartido.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompartidoModule, EmpleadosModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Empleados';
}
