import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ContactoComponent } from './shared/contacto/contacto.component';
import { HomeComponent } from './shared/home/home.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { ServiciosComponent } from './shared/servicios/servicios.component';


export const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'nosotros', component:NosotrosComponent },
    { path: 'servicios', component:ServiciosComponent },
    { path: 'contacto', component:ContactoComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: '**', redirectTo: '/inicio'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{}
