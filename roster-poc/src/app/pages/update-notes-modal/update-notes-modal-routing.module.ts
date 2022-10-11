import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateNotesModalPage } from './update-notes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateNotesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateNotesModalPageRoutingModule {}
