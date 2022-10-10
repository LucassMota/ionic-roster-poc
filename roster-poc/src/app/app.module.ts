import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {InitializeAppService} from './services/initialize.app.service';

import {MigrationService} from './services/migrations.service';
// import { ProductRepository } from './repositories/product.repository';
import {DatabaseService} from './services/database.service';
import { SQLiteService } from './services/sqlite.service';
import { DetailService } from './services/detail.service';
import {ProductRepository} from './repositories/product.repository';
import {NoteRepository} from './repositories/note.repository';


export function initializeFactory(init: InitializeAppService) {
  return () => init.initializeApp();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, InitializeAppService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeAppService],
      multi: true
    },
    MigrationService,
    SQLiteService,
    DetailService,
    DatabaseService,
    ProductRepository,
    NoteRepository
  ],
  bootstrap: [AppComponent],
})


export class AppModule {
}
