import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss'],
})
export class CadastroProdutosComponent  implements OnInit {

  formProduto!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formProduto = fb.group({
      Valor: ['',Validators.required],
      Nome: ['',Validators.required],
    })
  }

  ngOnInit() {}

  apenasNumero(event:any) {
    return (event.keyCode >= 48 && event.keyCode <= 57)
  }

  salvarProduto(): void{
    if(this.formProduto.valid){

    }else{
      
    }
  }

}
