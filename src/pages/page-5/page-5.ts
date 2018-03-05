import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Page_2Page } from '../page-2/page-2';

/**
 * Generated class for the Page_5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-5',
  templateUrl: 'page-5.html',
})
export class Page_5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page_5Page');
  }

  nextPage20(){
    this.toast.create({
      message: 'Thank you for your feedback! ',
      duration: 3000
      }).present();
    this.navCtrl.setRoot(Page_2Page);
  }
}
