import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosComponent } from './produtos/produtos.component';



@NgModule({
  declarations: [CadastroProdutosComponent,ProdutosComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[CadastroProdutosComponent,ProdutosComponent]
})
export class ProdutosModule { }
