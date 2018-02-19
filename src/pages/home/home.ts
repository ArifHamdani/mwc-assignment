import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page_2Page} from '../page-2/page-2'; 
import { Page_3Page} from '../page-3/page-3'; 
import { Page_4Page } from '../page-4/page-4';
import { Page_5Page } from '../page-5/page-5';
import { Page_6Page } from '../page-6/page-6';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { 
    
  } 
  nextPage(){ 
    this.navCtrl.push(Page_2Page);
  } 
  nextPage2(){ 
    this.navCtrl.push(Page_3Page);
  } 
 nextPage3(){ 
   this.navCtrl.push(Page_4Page);
 } 
 nextPage4(){ 
   this.navCtrl.push(Page_5Page);
 } 
 nextPage5(){ 
   this.navCtrl.push(Page_6Page);
 }


}
 

