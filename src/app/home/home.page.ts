import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { Tab1Component } from '../tab1/tab1.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {
console.log("hi")
  }

}


