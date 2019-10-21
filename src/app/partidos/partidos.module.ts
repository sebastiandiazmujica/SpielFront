import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartidosPage } from './partidos.page';

const routes: Routes = [
  {
    path: '',
    component: PartidosPage,
    children: [
      {
        path: 'partido1', loadChildren: '/partidos.detailpage1.html'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartidosPage]
})
export class PartidosPageModule {}
