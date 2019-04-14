import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import {Actualite} from '.././models/actualite.model';
import { Services } from '@angular/core/src/view';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss'],
})
export class Tab1Component {
  aActualite: Actualite[]

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private services: Services ){ 
     
    }
ionViewWillEnter( ) {
  this.aActualite = this.services.aActualite.slice();
}
  

}
