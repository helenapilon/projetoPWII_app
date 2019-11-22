import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEventosPageRoutingModule } from './listar-eventos-routing.module';

import { ListarEventosPage } from './listar-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEventosPageRoutingModule
  ],
  declarations: [ListarEventosPage]
})
export class ListarEventosPageModule {}
