import { Component } from '@angular/core';
import { Notes } from '../../models/Notes';
import {AlertController, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-update-notes-modal',
  templateUrl: './update-notes-modal.page.html',
  styleUrls: ['./update-notes-modal.page.scss'],
})
export class UpdateNotesModalPage {
  notes: Notes;

  constructor(private modalCtrl: ModalController, private alertController: AlertController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.notes.description) {
      return this.modalCtrl.dismiss(this.notes, 'confirm');
    }
  }

  async deleteNote(){
    const alert = await this.alertController.create({
      header: 'Do you want to delete this note?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            return this.modalCtrl.dismiss(this.notes, 'delete');
          },
        },
      ],
    });
    await alert.present();
    }


}
