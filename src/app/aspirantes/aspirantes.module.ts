import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AspirantesRoutingModule } from './aspirantes-routing.module';
import { AspiranteRegistroComponent } from './pages/aspirante-registro/aspirante-registro.component';
import { MaterialComponentsModule } from '../materialcomponents/materialcomponents.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StepOneComponent } from './components/step-one/step-one.component';


@NgModule({
  declarations: [
    AspiranteRegistroComponent,
    StepOneComponent
  ],
  imports: [
    CommonModule,
    AspirantesRoutingModule,
    MaterialComponentsModule,
    ReactiveFormsModule
  ]
})
export class AspirantesModule { }
