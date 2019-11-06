import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule, Platform, IonSegment } from '@ionic/angular';
import { EventoPage } from './evento.page';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: EventoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EventoPage]
})
export class EventoPageModule {
  
  partidos: string; 
  isAndroid: boolean = false;
//   http: HttpClient;
//   constructor(http: HttpClient) {
//   this.partidos = "'creados'";
//   this.http = http
//   // this.http.get('https://swapi.co/api/films')
//   //   .subscribe(data => {
//   //     console.log('my data: ', data);
//   //   })
// }

}
