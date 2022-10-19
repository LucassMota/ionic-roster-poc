import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements as jeepSqlite} from 'jeep-sqlite/loader';
import { defineCustomElements as pwaElements} from '@ionic/pwa-elements/loader';
import {Capacitor} from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

if (environment.production) {
  enableProdMode();
}
pwaElements(window);
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
    sqlite.checkConnectionsConsistency().then(()=>{
      console.log('checkConnectionsConsistency - OK');
    });

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(`PlatformBrowserDynamic - Error: ${err}`));
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }

});
