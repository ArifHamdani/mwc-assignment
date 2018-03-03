import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page_2Page } from '../page-2/page-2';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
nextPage10(){ 
this.navCtrl.push(Page_2Page);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page_9Page');
  }

}
