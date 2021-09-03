import { PrivateComponent } from './components/private/private.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular'

const routes: Routes = [
  { path: 'private', component: PrivateComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
