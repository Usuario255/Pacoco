import { Component, OnInit } from '@angular/core';
import { Consumidor } from 'src/app/classes/Consumidores/consumidores';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.scss'],
})
export class ConsumidorComponent implements OnInit {
  listaConsumidor: Consumidor[] = [
    {
      Celular: "890128390218",
      Email: "vba@asdsa.com",
      Nome: "Adalsdmlks",
      Sexo: "homem",
      Gasto: 12
    },
  ];

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
