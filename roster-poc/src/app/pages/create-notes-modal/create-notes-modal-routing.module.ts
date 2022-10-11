import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNotesModalPage } from './create-notes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNotesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNotesModalPageRoutingModule {}
