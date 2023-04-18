import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/classes/Produto/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent  implements OnInit {

  listaProduto: Produto [] = [
    {
     Nome:"Paçoca",
     Valor: 1.5,
  },
    {
     Nome:"Amendoin",
     Valor: 1.0,
  },
    {
     Nome:"Pé de moleque",
     Valor: 0.5,
  },
]
  handlerMessage: string = '';
  roleMessage: string = '';

  alertButtons: any[] = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => { this.handlerMessage = 'Alert canceled'; }
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => { this.handlerMessage = 'Alert confirmed'; }
    }
  ];


  constructor() { }

  ngOnInit() { }

  setResult(ev: any) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }

}
