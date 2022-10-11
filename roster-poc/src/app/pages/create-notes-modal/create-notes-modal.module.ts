import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNotesModalPageRoutingModule } from './create-notes-modal-routing.module';

import { CreateNotesModalPage } from './create-notes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNotesModalPageRoutingModule
  ],
  declarations: [CreateNotesModalPage]
})
export class CreateNotesModalPageModule {}
