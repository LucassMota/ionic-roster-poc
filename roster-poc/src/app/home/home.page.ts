import { Component, OnInit } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from '../utils/utils';
import { NoteRepository } from '../repositories/note.repository';
import { Notes } from '../models/Notes';
import { ModalController } from '@ionic/angular';
import { UpdateNotesModalPage } from '../pages/update-notes-modal/update-notes-modal.page';
import { CategoryRepository } from '../repositories/category.repository';
import { Category } from '../models/Categories';
import { CreateNotesModalPage } from '../pages/create-notes-modal/create-notes-modal.page';

const cardColors = [
  'azure',
  'beige',
  'bisque',
  'blanchedalmond',
  'burlywood',
  'cornsilk',
  'gainsboro',
  'ghostwhite',
  'ivory',
  'khaki',
];
const pickColor = () => {
  const rand = Math.floor(Math.random() * 10);
  return cardColors[rand];
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notes: Notes[] = [];
  categories: Category[] = [];
  orientation: string;

  constructor(
    private noteRepository: NoteRepository,
    private categoryRepository: CategoryRepository,
    private modalCtrl: ModalController
  ) {}

  scene: any;

  onColumnDrop(dropResult) {
    const scene = Object.assign({}, this.scene);
    scene.children = applyDrag(scene.children, dropResult);
    this.scene = scene;
  }

  onCardDrop(columnId, dropResult) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = Object.assign({}, this.scene);
      const column = scene.children.filter((p) => p.id === columnId)[0];
      const columnIndex = scene.children.indexOf(column);

      const newColumn = Object.assign({}, column);
      newColumn.children = applyDrag(newColumn.children, dropResult);
      scene.children.splice(columnIndex, 1, newColumn);

      this.scene = scene;
    }
  }

  getCardPayload(columnId) {
    return (index) =>
      this.scene.children.filter((p) => p.id === columnId)[0].children[index];
  }

  log(...params) {
    // console.log(...params);
  }

  updateCategoryItem(event) {
    setTimeout(() => {
      if (event.isSource) {
        const item = Object.assign(event?.payload);
        const noteUpdate: Notes[] = [];

        this.scene.children.forEach((category) => {
          category.children.forEach((i) => {
            if (i.idNote === item.idNote) {
              noteUpdate.push({
                description: i.description,
                title: i.title,
                idCategory: category.id,
                idNote: i.idNote,
              });
            }
          });
        });

        if (noteUpdate.length > 0) {
          noteUpdate.forEach(async (n) => {
            await this.noteRepository.updateNote(n);
          });
        }
      }
    }, 200);
  }

  async getNotes(): Promise<any> {
    this.notes = await this.noteRepository.getNotes();
  }

  async getCategories(): Promise<any> {
    await this.categoryRepository.createInitCategory();
    this.categories = await this.categoryRepository.getCategories();
  }

  async openUpdateNoteModal(note: Notes) {
    const modal = await this.modalCtrl.create({
      component: UpdateNotesModalPage,
      componentProps: {
        notes: Object.assign({}, note),
      },
    });

    modal.present();

    const { data: updatedNote, role } = await modal.onWillDismiss<Notes>();

    if (role === 'confirm') {
      await this.noteRepository.updateNote(updatedNote);

      this.notes.splice(
        this.notes.findIndex((p) => p.idNote === updatedNote.idNote),
        1,
        updatedNote
      );
      window.location.reload();
    }

    if (role === 'delete') {

      const result = window.confirm('Do you want to delete this note?');
      if(result){
        await this.noteRepository.deleteNote(updatedNote.idNote)
        window.location.reload();
      }
    }
  }

  async openCreateNoteModal() {
    const modal = await this.modalCtrl.create({
      component: CreateNotesModalPage,
    });

    modal.present();
    const { data: createdNote, role } = await modal.onWillDismiss<Notes>();

    if (role === 'confirm') {
      console.log(`creating product: ${JSON.stringify(createdNote)}`);
      await this.noteRepository.createNote(createdNote);
      this.notes.push(createdNote);
      window.location.reload();
    }
  }

  async ngOnInit(): Promise<void> {
    if (window.matchMedia('(max-width: 500px)').matches) {
      this.orientation = 'vertical';
    } else {
      this.orientation = 'horizontal';
    }

    await this.getCategories();
    await this.getNotes();

    this.scene = {
      type: 'container',
      props: {
        orientation: 'horizontal',
      },
      children: generateItems(this.categories?.length, (i) => ({
        id: this.categories[i].idCategory,
        type: 'container',
        name: this.categories[i].title,
        props: {
          orientation: 'vertical',
          className: 'card-container',
        },
        children: this.notes?.filter(
          (n) => n.idCategory === this.categories[i].idCategory
        ),
      })),
    };
  }
}
