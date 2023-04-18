import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-consumidor',
  templateUrl: './cadastro-consumidor.component.html',
  styleUrls: ['./cadastro-consumidor.component.scss'],
})
export class CadastroConsumidorComponent implements OnInit {

  form!: FormGroup;

  listaGenero: string[] = ["Homem Cis","Mulher Cis","Homem Trans","Mulher Trans","Nenhum"];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required,Validators.min(4)],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      genero: ['',Validators.required]
    });
  }

  enviarConsumidor() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  // Utilitarios
  somenteNumero(event: any) {
    return ((event.charCode >= 48 && event.charCode <= 57)) 
  }
  mascaraCelular(): string{
    return'(00) 0000-0000'
  }
}
