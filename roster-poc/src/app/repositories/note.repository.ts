import {DatabaseService} from '../services/database.service';
import {DBSQLiteValues, SQLiteDBConnection} from '@capacitor-community/sqlite';
import {Note} from '../models/Notes';
import notesData from '../utils/notes-date';
import {Product} from '../models/Product';
import {Injectable} from '@angular/core';

@Injectable()
export class NoteRepository {

  constructor(private databaseService: DatabaseService) {
  }

  async getNotes():  Promise<Note[]>{
    return this.databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const notes: DBSQLiteValues = await db.query('select * from notes');
      return notes.values as Note[];
    });

  }

  async createNote(note: Note){
    return this.databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const sql = 'insert into notes (title, description, category) values (?, ?, ?)';
      const values: Array<any> = [note.title, note.description, note.category];

      const ret: any = await db.run(sql, values);

      if (ret.changes.lastId > 0) {
        return ret.changes as Product;
      }
      throw Error('create product failed');
    });
  }

  async createInitNotes(): Promise<any> {

    await this.databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const sqlcmd = 'DELETE FROM notes;';
      await db.execute(sqlcmd, false);
    });

    const notes: Note[] = notesData;

    for (const p of notes) {
     await this.createNote(p);
    }
  }


}
