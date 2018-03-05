import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Page_2Page} from '../page-2/page-2'; 
import { Page_3Page} from '../page-3/page-3'; 
import { Page_4Page } from '../page-4/page-4';
import { Page_5Page } from '../page-5/page-5';
import { Page_6Page } from '../page-6/page-6';
import { Page_9Page } from '../page-9/page-9';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;


  constructor(private afAuth: AngularFireAuth, private toast:ToastController, public navCtrl: NavController, public navParams: NavParams) { 
    
  } 
 //login 
 async nextPage(user: User){
  this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
  .then(auth => {
    this.navCtrl.setRoot(ProfilePage);
    this.toast.create({
      message: 'Login Succesful. ' + 'Welcome to MediQ, '+ user.email,
      duration: 3000
    }).present();
  })
  .catch(err => {
    // Error message
    let toast = this.toast.create({
      message: err.message,
      duration: 3000
    });
    toast.present();
  });
}

//signup
nextPage11(){ 
  this.navCtrl.push(Page_9Page);
}



}
 

