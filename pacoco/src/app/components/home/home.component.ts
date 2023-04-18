import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consumidor } from 'src/app/classes/Consumidores/consumidores';
import { Produto } from 'src/app/classes/Produto/produto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  listaConsumidores: Consumidor[] = [{
    Celular:"(81) 99225-0878",
    Email:"vbarros.2001@hotmail.com",
    Gasto: 5.00,
    Nome:"Vinícius Barros",
    Sexo:"HOMEM"
  
  }]

  listaProdutos: Produto[] = [{
    Nome:'Paçoco',
    Valor:1.5,
  }]


  constructor(private route: Router) { }

  ngOnInit() {}

  salvarConsumidor(){
   this.route.navigate(["pacoco/cadastro-consumidor"])
  }
  salvarProduto(){
   this.route.navigate(["pacoco/cadastro-produto"])
  }
}
