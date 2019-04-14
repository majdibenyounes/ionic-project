import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Tab1Component
      }
    ])
  ],
  declarations: [Tab1Component]
})
export class Tab1ComponentModule {}
