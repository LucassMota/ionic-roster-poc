import { DatabaseService } from '../services/database.service';
import {
  DBSQLiteValues,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import { Notes } from '../models/Notes';
import notesData from '../utils/notes-data';
// import { Product } from '../models/Product';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteRepository {
  constructor(private databaseService: DatabaseService) {}

  async getNotes(): Promise<Notes[]> {
    return this.databaseService.executeQuery<any>(
      async (db: SQLiteDBConnection) => {
        const notes: DBSQLiteValues = await db.query('select * from notes');
        return notes.values as Notes[];
      }
    );
  }

  async createNote(note: Notes) {
    return this.databaseService.executeQuery<any>(
      async (db: SQLiteDBConnection) => {
        const sql =
          'insert into notes (title, description, idCategory) values (?, ?, ?)';
        const values: Array<any> = [
          note.title,
          note.description,
          note.idCategory = 1,
        ];

        const ret: any = await db.run(sql, values);

        if (ret.changes.lastId > 0) {
          return ret.changes as Notes;
        }
        throw Error('create note failed');
      }
    );
  }

  async updateNote(note: Notes) {
    return this.databaseService.executeQuery<any>(
      async (db: SQLiteDBConnection) => {
        const sqlcmd =
          'update notes set description = ?, title = ?, idCategory = ? where idNote = ?';
        const values: Array<any> = [
          note.description,
          note.title,
          note.idCategory,
          note.idNote,
        ];
        const ret: any = await db.run(sqlcmd, values);
        if (ret.changes.changes > 0) {
          return await this.getNotesById(note.idNote);
        }
        throw Error('update note failed');
      }
    );
  }

  async getNotesById(id: number): Promise<Notes> {
    return this.databaseService.executeQuery<any>(
      async (db: SQLiteDBConnection) => {
        const sqlcmd = 'select * from notes where idNote = ? limit 1';
        const values: Array<any> = [id];
        const ret: any = await db.query(sqlcmd, values);
        if (ret.values.length > 0) {
          return ret.values[0] as Notes;
        }
        throw Error('get note by id failed');
      }
    );
  }

  async createInitNotes(): Promise<any> {
    await this.databaseService.executeQuery<any>(
      async (db: SQLiteDBConnection) => {
        const sqlcmd = 'DELETE FROM notes;';
        await db.execute(sqlcmd, false);
      }
    );

    const notes: Notes[] = notesData;

    for (const p of notes) {
      await this.createNote(p);
    }
  }

    async deleteNote(idNote: number) {
        return  this.databaseService.executeQuery<any>(
        //     async (db: SQLiteDBConnection) => {
        //         const sqlcmd = 'DELETE FROM notes WHERE idNote = ?';
        //         const values: Array<any> = [idNote];
        //         const ret: any = await db.query(sqlcmd, values);
        //
        //         if (ret.values.length > 0) {
        //             return true
        //         }
        //         throw Error(' ->> delete note by id failed');
        //     }


            async (db: SQLiteDBConnection) => {
                await db.query(`delete from notes where idNote = ${idNote};`);
            }

        );

    }
}
