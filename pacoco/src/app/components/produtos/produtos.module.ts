import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CadastroProdutosComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[CadastroProdutosComponent]
})
export class ProdutosModule { }
