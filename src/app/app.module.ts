import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 
import { Page_2Page } from '../pages/page-2/page-2'; 
import { Page_3Page} from '../pages/page-3/page-3'; 
import { Page_4Page} from '../pages/page-4/page-4'; 
import{ Page_5Page} from '../pages/page-5/page-5'; 
import{ Page_6Page} from '../pages/page-6/page-6';
import { Page_7Page } from '../pages/page-7/page-7';
import { Page_8Page } from '../pages/page-8/page-8'; 
import{ Page_9Page} from '../pages/page-9/page-9';
import { ProfilePage } from '../pages/profile/profile';
import { FIREBASE_CONFIG } from './firebase.credentials';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page_2Page,
    Page_3Page, 
    Page_4Page, 
    Page_5Page, 
    Page_6Page, 
    Page_7Page, 
    Page_8Page, 
    Page_9Page,
    ProfilePage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page_2Page,
    Page_3Page, 
    Page_4Page, 
    Page_5Page, 
    Page_6Page, 
    Page_7Page, 
    Page_8Page, 
    Page_9Page,
    ProfilePage,
    AngularFireDatabase,
    AngularFireDatabaseModule,
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
