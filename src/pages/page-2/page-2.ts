import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page_3Page } from '../page-3/page-3';
import { Page_4Page } from '../page-4/page-4';
import { Page_5Page } from '../page-5/page-5';
import { Page_6Page } from '../page-6/page-6';
import { Page_7Page } from '../page-7/page-7';
import { Page_8Page } from '../page-8/page-8';

/**
 * Generated class for the Page_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-2',
  templateUrl: 'page-2.html',
})
export class Page_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
nextPage3(){ 
  this.navCtrl.push(Page_3Page);
}
nextPage4(){ 
  this.navCtrl.push(Page_4Page);
}
nextPage5(){ 
  this.navCtrl.push(Page_5Page); 
}
nextPage6(){ 
  this.navCtrl.push(Page_6Page); 
}
nextPage7(){ 
  this.navCtrl.push(Page_7Page); 
}
nextPage8(){ 
  this.navCtrl.push(Page_8Page);
}

 

}


