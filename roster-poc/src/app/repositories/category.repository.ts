import {Injectable} from '@angular/core';
import {DatabaseService} from '../services/database.service';
import {DBSQLiteValues, SQLiteDBConnection} from '@capacitor-community/sqlite';
import {Category} from '../models/Categories';
import categoryData from '../utils/category-data';

@Injectable()
export class CategoryRepository{
  constructor(private databaseService: DatabaseService) {
  }

  async getCategories(): Promise<any> {
    return this.databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const categories: DBSQLiteValues = await db.query('select * from category');
      return categories.values as Category[];
    });

  }

  async createCategories(c: Category) {
    return this.databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const sql = 'insert into category (title) values (?)';
      const values: Array<any> = [c.title];

      const ret: any = await db.run(sql, values);

      if (ret.changes.lastId > 0) {
        return ret.changes as Category;
      }
      throw Error('create category failed');
    });
  }

  async createInitCategory(): Promise<any>{

    await this.databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const sqlcmd = 'DELETE FROM category;';
      await db.execute(sqlcmd, false);
    });

    const categories: Category[] = categoryData;

    for (const c of categories) {
      await this.createCategories(c);
    }
  }

}
