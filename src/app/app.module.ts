import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//TOASTER
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Initialize Firebase
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from "../environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/error/error.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { RepartidorAltaComponent } from './pages/repartidor/repartidor-alta/repartidor-alta.component';
import { RepartidorDetalleComponent } from './pages/repartidor/repartidor-detalle/repartidor-detalle.component';
import { SalenPizzasComponent } from './pages/salen-pizzas/salen-pizzas.component';
import { GestionarRepartoComponent } from './pages/gestionar-reparto/gestionar-reparto.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { ListadoRepartidorComponent } from './components/listado-repartidor/listado-repartidor.component';
import { DetalleRepartidorComponent } from './components/detalle-repartidor/detalle-repartidor.component';
import { PaisRepartidorComponent } from './components/pais-repartidor/pais-repartidor.component';
import { PizzaAddComponent } from './components/pizza-add/pizza-add.component';
import { PizzaUpdateComponent } from './components/pizza-update/pizza-update.component';
import { PizzaDeleteComponent } from './components/pizza-delete/pizza-delete.component';
import { PizzaListadoComponent } from './components/pizza-listado/pizza-listado.component';
import { DetalleRepartidorGestionComponent } from './components/detalle-repartidor-gestion/detalle-repartidor-gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BienvenidoComponent,
    ErrorComponent,
    IngresarComponent,
    RepartidorAltaComponent,
    RepartidorDetalleComponent,
    SalenPizzasComponent,
    GestionarRepartoComponent,
    TablaPaisesComponent,
    ListadoRepartidorComponent,
    DetalleRepartidorComponent,
    PaisRepartidorComponent,
    PizzaAddComponent,
    PizzaUpdateComponent,
    PizzaDeleteComponent,
    PizzaListadoComponent,
    DetalleRepartidorGestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
