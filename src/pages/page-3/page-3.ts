import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Page_2Page } from '../page-2/page-2';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Page_3Page');
  }
  
  nextPage14(){ 
    this.navCtrl.setRoot(Page_2Page);
    this.toast.create({
      message: 'You have successfully queued up. Please check Live Queue Number page for more info.',
      duration: 3000
    }).present();
  }
  

}
