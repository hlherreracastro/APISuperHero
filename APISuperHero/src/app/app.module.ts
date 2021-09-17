import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { PrivateComponent } from './components/private/private.component';
//import { SuperheroeComponent } from './vistas/superheroe/superheroe.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,
    routingComponents
    //SuperheroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-dglcyv8y.us.auth0.com',
      clientId: 'VpgR6EKZKrt39nrPVd3IkMvUTGa4UZBL',
      cacheLocation: 'localstorage', //despues de obtener los datos de ingreso se guarda en el localstorage  ya que si se guarda en una variable al refresh se pierden los datos
      useRefreshTokens: true //por dentro el modulo actualiza el modulo de registro y no se pierden los tokens
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
