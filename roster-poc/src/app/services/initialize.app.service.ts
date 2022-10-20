import { Injectable } from '@angular/core';
import { SQLiteService } from './sqlite.service';
import { MigrationService } from './migrations.service';

@Injectable({
  providedIn: 'root'
})
export class InitializeAppService {

  constructor(  private sqliteService: SQLiteService, private migrationService: MigrationService ) { }


  async initializeApp() {
    console.log('initalizeApp');
    await this.sqliteService.initializePlugin().then(async (ret) => {
      try {
        //execute startup queries
        console.log('Start Migrate');
        await this.migrationService.migrate();

      } catch (error) {
        throw Error(`initializeAppError: ${error}`);
      }

    });
  }
}
