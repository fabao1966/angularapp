import { PessoasService } from './../../pessoas.service';
import { Pessoa } from './../../Pessoa';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  formulario: any;
  tituloFormulario: string = "";

  constructor(private pessoaService: PessoasService) { }

  ngOnInit(): void {

    this.tituloFormulario = "Nova Pessoa";

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null)
    });
  }

  EnviarFormulario():void{

    const pessoa: Pessoa = this.formulario.value;

    this.pessoaService.SalvarPessoa(pessoa).subscribe(resultado =>{
      alert('Pessoa inserida com sucesso!');
    });

  }

}
