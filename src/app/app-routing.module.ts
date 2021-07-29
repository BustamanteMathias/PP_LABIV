import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateAdminGuard } from './guards/validate-admin.guard';
import { ValidateLoginGuard } from './guards/validate-login.guard';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/error/error.component';
import { GestionarRepartoComponent } from './pages/gestionar-reparto/gestionar-reparto.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { SalenPizzasComponent } from './pages/salen-pizzas/salen-pizzas.component';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: "full" },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'ingresar', component: IngresarComponent },
  { path: 'gestion-reparto', component: GestionarRepartoComponent, canActivate: [ValidateLoginGuard] },
  { path: 'salen-pizzas', component: SalenPizzasComponent, canActivate: [ValidateLoginGuard, ValidateAdminGuard] },
  //REPARTIDOR LAZY LOAD
  {
    path: 'repartidor',
    loadChildren: () => import ('./modules/repartidor-lazy-load/modulo-repartidor.module').then(m => m.ModuloRepartidorModule)
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
