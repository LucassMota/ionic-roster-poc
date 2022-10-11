import { Component, OnInit } from '@angular/core';
import { Notes } from '../../models/Notes';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-notes-modal',
  templateUrl: './create-notes-modal.page.html',
  styleUrls: ['./create-notes-modal.page.scss'],
})
export class CreateNotesModalPage implements OnInit {
  note: Notes;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.note = {
      title: '',
      description: '',
      idCategory: 0,
    } as Notes;
  }

  cancel() {
    console.log(this.note);
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.note.description) {
      return this.modalCtrl.dismiss(this.note, 'confirm');
    }
  }
}
