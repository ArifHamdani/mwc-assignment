import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Page_2Page } from '../page-2/page-2';

/**
 * Generated class for the Page_6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-6',
  templateUrl: 'page-6.html',
})
export class Page_6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page_6Page');
  }

  nextPage12(){ 
    this.navCtrl.setRoot(HomePage); 
  }
  nextPage13(){ 
    this.navCtrl.setRoot(Page_2Page);
  }    

}
