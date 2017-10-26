import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListsPage } from './../pages/lists/lists';
import { GridsPage } from './../pages/grids/grids';
import { GesturesPage } from './../pages/gestures/gestures';
import { TouchEventComponet } from './../components/touch-event.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListsPage,
    GridsPage,
    GesturesPage,
    TouchEventComponet
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListsPage,
    GridsPage,
    GesturesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
