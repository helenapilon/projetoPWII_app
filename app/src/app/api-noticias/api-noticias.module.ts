import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiNoticiasPageRoutingModule } from './api-noticias-routing.module';

import { ApiNoticiasPage } from './api-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiNoticiasPageRoutingModule
  ],
  declarations: [ApiNoticiasPage]
})
export class ApiNoticiasPageModule {}
