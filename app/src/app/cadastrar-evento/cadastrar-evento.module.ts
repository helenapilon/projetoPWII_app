import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarEventoPageRoutingModule } from './cadastrar-evento-routing.module';

import { CadastrarEventoPage } from './cadastrar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarEventoPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [CadastrarEventoPage]
})
export class CadastrarEventoPageModule {}
