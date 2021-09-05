import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspiranteRegistroComponent } from './pages/aspirante-registro/aspirante-registro.component';

const routes: Routes = [
  {
    path: '',
    component: AspiranteRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspirantesRoutingModule { }
