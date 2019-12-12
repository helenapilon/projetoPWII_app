import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  
  public loginForm: any;
  messageTitulo = ""
  messageDescricao = "";
  errorTitulo = false;
  errorDescricao = false;

  constructor(formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
    });
   }

   login() {
    let { titulo, descricao } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!titulo.valid) {
        this.errorTitulo = true;
        this.messageTitulo = "Ops! Preencha o título";
      } else {
        this.messageTitulo = "";
      }

      if (!descricao.valid) {
        this.errorDescricao = true;
        this.messageDescricao = "Ops! Preencha a descrição";
      } else {
        this.messageDescricao = "";
      }

    }
    else {
      alert("Uhull! Tudo certo");
    }
  }   
  ngOnInit() {
  }

}