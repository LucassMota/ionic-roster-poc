import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements as jeepSqlite} from 'jeep-sqlite/loader';
import {Capacitor} from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

if (environment.production) {
  enableProdMode();
}

jeepSqlite(window);

window.addEventListener('DOMContentLoaded', async () => {
  const plat = Capacitor.getPlatform();
  const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  try {

    console.log('plat:', plat);

    if(plat === 'web') {
      console.log('111 in index.ts');
      const jeepEl = document.createElement('jeep-sqlite');
      document.body.appendChild(jeepEl);
      await customElements.whenDefined('jeep-sqlite');
      await sqlite.initWebStore();
      console.log('after sqlite.initWebStore()');
    }
    await sqlite.checkConnectionsConsistency();

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
  } catch (err) {
    console.log(`Error: ${err}`);
    throw new Error(`Error: ${err}`);
  }

});
