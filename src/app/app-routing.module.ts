import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/page/bienvenida/bienvenida.component';
import { LoginComponent } from './components/page/login/login.component';
import { RepartidorAltaComponent } from './components/page/repartidor-alta/repartidor-alta.component';
import { CanActivateGuard } from './guards/can-activate.guard';

//RUTEO
const routes: Routes = [
  { path: "", redirectTo: "bienvenida", pathMatch: "full" },
  { path: "bienvenida", component: BienvenidaComponent },
  { path: "login", component: LoginComponent },
  { path: "repartidor/alta", component: RepartidorAltaComponent},//, canActivate: [CanActivateGuard]},
  { path: "**", component: BienvenidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
