import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ResultsListPage } from '../pages/home/partials/results/results';
import { WikiSearchService } from './wiki-search.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultsListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultsListPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: WikiSearchService, useClass: WikiSearchService}
  ]
})
export class AppModule {}
