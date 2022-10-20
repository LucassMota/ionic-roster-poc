import { Component } from '@angular/core';
import { Notes } from '../../models/Notes';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-notes-modal',
  templateUrl: './update-notes-modal.page.html',
  styleUrls: ['./update-notes-modal.page.scss'],
})
export class UpdateNotesModalPage {
  notes: Notes;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.notes.description) {
      return this.modalCtrl.dismiss(this.notes, 'confirm');
    }
  }

  deleteNote(){
    return this.modalCtrl.dismiss(this.notes, 'delete');
  }
}
