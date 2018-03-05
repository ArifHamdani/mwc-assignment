import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Page_2Page } from '../page-2/page-2';
import { Observable } from 'rxjs/Observable';
import { Queue } from '../../models/queue';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the Page_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-3',
  templateUrl: 'page-3.html',
})
export class Page_3Page  {

  queue = {} as Queue;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase,) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Page_3Page');
  }
  
  nextPage14(){ 
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`queue/${auth.uid}`).set(this.queue)
      this.toast.create({
      message: 'You have successfully queued up. Please check Live Queue Number page for more info.',
      duration: 3000
      }).present();
    })
    this.navCtrl.setRoot(Page_2Page);
  }
  

}
