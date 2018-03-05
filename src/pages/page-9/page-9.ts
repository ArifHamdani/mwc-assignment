import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Page_2Page } from '../page-2/page-2';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the Page_9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-9',
  templateUrl: 'page-9.html',
})
export class Page_9Page {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, 
    private toast: ToastController,private alert: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }
 async nextPage10(user: User){

  this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
  .then(auth => {
    this.toast.create({
      message: 'Account has been registered. Please log in',
      duration: 3000
    }).present();
    this.navCtrl.setRoot(HomePage);
  })
  .catch(err => {
    // Error message
    let alert = this.alert.create({
      title:'Error',
      message: err.message,
      buttons: ['OK']
    });
    alert.present();
  });

}


}
