import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-kombat',
    loadChildren: () => import('./filmes/mortal-kombat/mortal-kombat.module').then( m => m.MortalKombatPageModule)
  },
  {
    path: 'liga-justica',
    loadChildren: () => import('./filmes/liga-justica/liga-justica.module').then( m => m.LigaJusticaPageModule)
  },
  {
    path: 'rogaipor-nos',
    loadChildren: () => import('./filmes/rogaipor-nos/rogaipor-nos.module').then( m => m.RogaiporNosPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'the-virtuoso',
    loadChildren: () => import('./filmes/the-virtuoso/the-virtuoso.module').then( m => m.TheVirtuosoPageModule)
  },
  {
    path: 'raya',
    loadChildren: () => import('./filmes/raya/raya.module').then( m => m.RayaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
