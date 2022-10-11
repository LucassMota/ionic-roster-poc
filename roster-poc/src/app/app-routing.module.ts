import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  // {
  //   path: 'notes',
  //   loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  // },
  {
    path: 'update-notes-modal',
    loadChildren: () => import('./pages/update-notes-modal/update-notes-modal.module').then( m => m.UpdateNotesModalPageModule)
  },  {
    path: 'create-notes-modal',
    loadChildren: () => import('./pages/create-notes-modal/create-notes-modal.module').then( m => m.CreateNotesModalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
