import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatabaseService } from './database.service';
import { SQLiteService } from './sqlite.service';

export const createSchemaProducts = `
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  price NUMBER NOT NULL,
  imageUrl TEXT DEFAULT '',
  isAvailable BOOLEAN NOT NULL CHECK (isAvailable IN (0, 1)),
  isPopular BOOLEAN NOT NULL CHECK (isAvailable IN (0, 1)),
  category TEXT DEFAULT '',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

export const createSchemaNotes = `
CREATE TABLE IF NOT EXISTS notes (
  idNote INTEGER PRIMARY KEY NOT NULL,
  title TEXT DEFAULT '',
  description TEXT DEFAULT '',
  idCategory INTEGER DEFAULT '',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;


export const createSchemaCategory = `
CREATE TABLE IF NOT EXISTS category (
  idCategory INTEGER PRIMARY KEY NOT NULL,
  title TEXT DEFAULT '',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

export const createSchemaTest = `
CREATE TABLE IF NOT EXISTS test (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);
`;

@Injectable()
export class MigrationService {

  constructor(private sqliteService: SQLiteService, private databaseService: DatabaseService) {
  }

  async migrate(): Promise<any> {
    await this.createTestTable();
    await this.createCategoryTable();
    await this.createNotesTable();

  }

  async createProductsTable(): Promise<any> {
    await this.databaseService.executeQuery(async (db) => {
      await db.execute(createSchemaProducts);
    });
  }

  async createTestTable(): Promise<void> {
    console.log(`going to create a connection`);
    const db = await this.sqliteService.createConnection(environment.databaseName, false, 'no-encryption', 1);
    console.log(`db ${JSON.stringify(db)}`);
    await db.open();
    console.log(`after db.open`);
    const query = `
            CREATE TABLE IF NOT EXISTS test (
              id INTEGER PRIMARY KEY NOT NULL,
              name TEXT NOT NULL
            );
            `;
    console.log(`query ${query}`);

    const res: any = await db.execute(query);
    console.log(`res: ${JSON.stringify(res)}`);
    await this.sqliteService.closeConnection(environment.databaseName);
    console.log(`after closeConnection`);
  }

  async createCategoryTable(): Promise<any> {
    await this.databaseService.executeQuery(async (db) => {
      await  db.execute(createSchemaCategory);
      console.log('create Category table');
    });
  }


  async createNotesTable(): Promise<any> {
    await this.databaseService.executeQuery(async (db) => {
      await db.execute(createSchemaNotes);
      console.log('create Note table');
    });
  }

}
