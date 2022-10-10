
import { DBSQLiteValues, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Injectable } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import productsData from './products-data-example';
import { Product } from '../models/Product';
@Injectable()
export class ProductRepository {
  constructor(private _databaseService: DatabaseService) {
  }

  async getProducts(): Promise<Product[]> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const products: DBSQLiteValues = await db.query('select * from products');
      return products.values as Product[];
    });
  }

  async createProduct(product: Product) {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      if (!product.imageUrl) {
        product.imageUrl = 'https://via.placeholder.com/150';
      }
      const sqlcmd = 'insert into products (name, description, price, imageUrl, isAvailable, isPopular, category) values (?, ?, ?, ?, ?, ?, ?)';
      const values: Array<any> = [product.name, product.description, product.price, product.imageUrl, product.isAvailable, product.isPopular, product.category];
      const ret: any = await db.run(sqlcmd, values);
      if (ret.changes.lastId > 0) {
        return ret.changes as Product;
      }
      throw Error('create product failed');
    });
  }

  async updateProduct(product: Product) {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const sqlcmd = 'update products set name = ?, description = ?, price = ?, imageUrl = ?, isAvailable = ?, isPopular = ?, category = ? where id = ?';
      const values: Array<any> = [product.name, product.description, product.price, product.imageUrl, product.isAvailable, product.isPopular, product.category, product.id];
      const ret: any = await db.run(sqlcmd, values);
      if (ret.changes.changes > 0) {
        return await this.getProductById(product.id);
      }
      throw Error('update product failed');
    });
  }

  async getProductById(id: number): Promise<Product> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const sqlcmd = 'select * from products where id = ? limit 1';
      const values: Array<any> = [id];
      const ret: any = await db.query(sqlcmd, values);
      if (ret.values.length > 0) {
        return ret.values[0] as Product;
      }
      throw Error('get product by id failed');
    });
  }

  async deleteProductById(id: number): Promise<void> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      await db.query(`delete from products where id = ${id};`);
    });
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      const sqlcmd = 'select * from products where category = ?';
      const values: Array<any> = [category];
      const ret: any = await db.query(sqlcmd, values);
      if (ret.values.length > 0) {
        return ret.values as Product[];
      }
      throw Error('get products by category failed');
    });
  }

  async createTestData(): Promise<any> {
    await this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      //delete all products
      const sqlcmd = 'DELETE FROM products;';
      await db.execute(sqlcmd, false);
    });

    const products: Product[] = productsData;

    for (const product of products) {
      await this.createProduct(product);
    }
  }
}
