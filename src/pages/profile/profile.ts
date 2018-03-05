import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile'
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import { MyApp } from '../../app/app.component';
import { HomePage } from '../home/home'; 
import { Page_2Page } from '../page-2/page-2'; 
import { Page_3Page} from '../page-3/page-3'; 
import { Page_4Page} from '../page-4/page-4'; 
import{ Page_5Page} from '../page-5/page-5'; 
import{ Page_6Page} from '../page-6/page-6';
import { Page_7Page } from '../page-7/page-7';
import { Page_8Page } from '../page-8/page-8'; 
import{ Page_9Page} from '../page-9/page-9';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile;  

  constructor(public navCtrl: NavController, private toast: ToastController, private afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase, public navParams: NavParams) {
  }

  async newProfile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      this.toast.create({
        message: 'Profile created successfully',
        duration: 3000
      }).present();
    })
    this.navCtrl.setRoot(Page_2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
