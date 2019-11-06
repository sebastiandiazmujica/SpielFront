import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  partidos: string;
  http: HttpClient;
  events: any;

  constructor(http: HttpClient, private navCtrl: NavController) {
  this.partidos = "creados";
  this.http = http
}

  ngOnInit() {
    this.http.get('http://spielback.com:8000/eventos').subscribe(data => {
    this.events = data;
    this.events = this.events.json;
  });
  
  }

  getEventos(){
    // this.http.get('http://spielback.com:8000/eventos').subscribe(data => {
    //   this.eventos = data;
    // })
  }

  redirect(){
    this.navCtrl.navigateForward("/tabs/create-evento");
  }


}
