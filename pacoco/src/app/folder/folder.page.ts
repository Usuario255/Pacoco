import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from '../components/home/home.component';
import { HomeModule } from '../components/home/home.module';
import { ConsumidorModule } from '../components/consumidor/consumidor.module';
import { ProdutosModule } from '../components/produtos/produtos.module';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,HomeModule,ConsumidorModule,ProdutosModule],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
