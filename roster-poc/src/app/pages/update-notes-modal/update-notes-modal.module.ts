import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateNotesModalPageRoutingModule } from './update-notes-modal-routing.module';

import { UpdateNotesModalPage } from './update-notes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateNotesModalPageRoutingModule
  ],
  declarations: [UpdateNotesModalPage]
})
export class UpdateNotesModalPageModule {}
