import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { IonicModule } from '@ionic/angular';
import { CadastroConsumidorComponent } from './cadastro-consumidor/cadastro-consumidor.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [ConsumidorComponent,CadastroConsumidorComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports:[
    ConsumidorComponent,
    CadastroConsumidorComponent
  ]
})
export class ConsumidorModule { }
