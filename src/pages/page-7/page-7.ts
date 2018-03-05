import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';

import { MyApp } from '../../app/app.component';
import { HomePage } from '../home/home'; 
import { Page_2Page } from '../page-2/page-2'; 
import { Page_3Page} from '../page-3/page-3'; 
import { Page_4Page} from '../page-4/page-4'; 
import{ Page_5Page} from '../page-5/page-5'; 
import{ Page_6Page} from '../page-6/page-6';
import { Page_8Page } from '../page-8/page-8'; 
import{ Page_9Page} from '../page-9/page-9';
import{ ProfilePage} from '../profile/profile';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the Page_7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-7',
  templateUrl: 'page-7.html',
})
export class Page_7Page {

  profileData: Observable<any>

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, private afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase, public navParams: NavParams)  {
      this.afAuth.authState.subscribe(data =>{
        if(data  && data.email && data.uid){
          this.profileData= this.afDatabase.object(`profile/${data.uid}`).valueChanges();
        }
        
    }
      )
    }

  ionViewDidLoad() {
  
  }
 
}
