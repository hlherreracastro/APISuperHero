import { PrivateComponent } from './components/private/private.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';
import { SuperheroeComponent } from './vistas/superheroe/superheroe.component';
import { NivelPoderComponent } from './vistas/nivel-poder/nivel-poder.component';
import { ApiService } from './servicios/api/api.service'
import { ConexionesFamiliaComponent } from './vistas/conexiones-familia/conexiones-familia.component';
import { BiografiaComponent } from './vistas/biografia/biografia.component';

const routes: Routes = [
  { path: 'private', component: PrivateComponent, canActivate: [ AuthGuard ] },
  { path: 'superheroe' , component:SuperheroeComponent },
  { path: 'nivel-poder' , component:NivelPoderComponent },
  { path: 'conexiones-familia' , component:ConexionesFamiliaComponent },
  { path: 'biografia' , component:BiografiaComponent },
  { path: 'api' , component:ApiService },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SuperheroeComponent, NivelPoderComponent, ConexionesFamiliaComponent, BiografiaComponent]
