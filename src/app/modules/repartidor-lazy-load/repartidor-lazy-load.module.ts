import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateLoginGuard } from 'src/app/guards/validate-login.guard';
import { ErrorComponent } from 'src/app/pages/error/error.component';
import { RepartidorDetalleComponent } from 'src/app/pages/repartidor/repartidor-detalle/repartidor-detalle.component';
import { RepartidorAltaComponent } from 'src/app/pages/repartidor/repartidor-alta/repartidor-alta.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ValidateLoginGuard],
    children: [
      //REPARTIDOR
      { path: '', redirectTo: 'alta', pathMatch: "full" },
      { path: 'alta', component: RepartidorAltaComponent },
      { path: 'detalle', component: RepartidorDetalleComponent },
      { path: '**', component: ErrorComponent },
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartidorLazyLoadModule { }
