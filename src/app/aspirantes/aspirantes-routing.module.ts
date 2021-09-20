import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspiranteRegistroComponent } from './pages/aspirante-registro/aspirante-registro.component';
import { CurpDemoComponent } from './pages/curp-demo/curp-demo.component';

const routes: Routes = [
  {
    path: '',
    component: AspiranteRegistroComponent
  },
  {
    path: 'curp-demo',
    component: CurpDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspirantesRoutingModule { }
