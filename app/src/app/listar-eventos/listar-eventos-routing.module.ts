import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEventosPage } from './listar-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEventosPageRoutingModule {}
