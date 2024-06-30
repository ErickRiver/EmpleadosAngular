import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './cabecera/titulo.component';



@NgModule({
  declarations: [
    TituloComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    TituloComponent
  ]
})
export class CompartidoModule { }

