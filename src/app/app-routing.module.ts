import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importo todas las clases necesarias

import { LayoutComponent } from './layout/layout.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ParametrosComponent } from './componente-con-parametros/componente-con-parametros.component'
import { NotFoundComponent } from './not-found/not-found.component'

// PATH es la direccion url
// COMPONENT el componenete a renderizar ( si ya esta renderizado no se renderizara dos veces )
// REDIRECTTO Redireccionamiento a otro path
// '**' Representa cualquier otra URL
// PATH:'{ruta}:id' EL ID ES UN PARAMETRO ENVIADO POR URL
// CHILDREN Significa que abra otro <router-outlet> dentro del <router-outlet> padre

const routes: Routes = [
  {
    path:'', 
    component: LayoutComponent,
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path:'about',
        component: AboutComponent
      },
      {
        path:'component/:id',
        component: ParametrosComponent
      },
      {
        path:'component',
        redirectTo: 'component/1',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
