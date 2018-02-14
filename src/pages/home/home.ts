import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page_2Page} from '../page-2/page-2'; 
import { Page_3Page} from '../page-3/page-3';

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

  } 
 

