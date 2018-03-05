import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Page_2Page } from './page-2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@NgModule({
  declarations: [
    Page_2Page,
  ],
  imports: [
    IonicPageModule.forChild(Page_2Page),
  ],
})
export class Page_2PageModule {}
