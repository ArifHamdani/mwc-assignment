import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Queue } from '../../models/queue';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the Page_8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-8',
  templateUrl: 'page-8.html',
})

export class Page_8Page {

  queueData: Observable<any>

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, private afAuth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase, public navParams: NavParams)  {
      this.afAuth.authState.subscribe(data =>{
        if(data  && data.email && data.uid){
          this.queueData= this.afDatabase.object(`queue/${data.uid}`).valueChanges();
        }
        
    }
      )
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page_8Page');
  }

}
