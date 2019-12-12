import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiNoticiasPage } from './api-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: ApiNoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiNoticiasPageRoutingModule {}
