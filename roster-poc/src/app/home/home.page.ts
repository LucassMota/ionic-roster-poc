import {Component, OnInit} from '@angular/core';
import {ContainerComponent, DraggableComponent} from 'ngx-smooth-dnd';
import {applyDrag, generateItems} from '../utils/utils';
import {NoteRepository} from '../repositories/note.repository';
import {Note} from "../models/Notes";

const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod'];

const cardColors = ['azure', 'beige', 'bisque', 'blanchedalmond', 'burlywood', 'cornsilk', 'gainsboro', 'ghostwhite', 'ivory', 'khaki'];
const pickColor = () => {
  const rand = Math.floor((Math.random() * 10));
  return cardColors[rand];
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  notes: Note[] = [];

  constructor(private noteRepository: NoteRepository) {
  }

  scene: any;
  items = generateItems(50, i => ({data: 'Draggable ' + i}));

  onColumnDrop(dropResult) {
    const scene = Object.assign({}, this.scene);
    scene.children = applyDrag(scene.children, dropResult);
    this.scene = scene;
  }

  onCardDrop(columnId, dropResult) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = Object.assign({}, this.scene);
      const column = scene.children.filter(p => p.id === columnId)[0];
      const columnIndex = scene.children.indexOf(column);

      const newColumn = Object.assign({}, column);
      newColumn.children = applyDrag(newColumn.children, dropResult);
      scene.children.splice(columnIndex, 1, newColumn);

      this.scene = scene;
    }
  }

  getCardPayload(columnId) {
    return (index) => this.scene.children.filter(p => p.id === columnId)[0].children[index];
  }

  log(...params) {
    console.log(...params);
  }

  async getNotes(): Promise<any> {
    await this.noteRepository.createInitNotes();
    this.notes = await this.noteRepository.getNotes();
    console.log('NOTAS:: ', this.notes);
  }

  async ngOnInit(): Promise<void> {
    await this.getNotes();

    this.scene = {
    type: 'container',
    props: {
      orientation: 'horizontal'
    },
    children: generateItems(4, (i) => ({
      id: `column${i}`,
      type: 'container',
      name: columnNames[i],
      props: {
        orientation: 'vertical',
        className: 'card-container'
      },
      children: this.notes
    }))
  };
    console.log('notes', this.notes);
  }

}
