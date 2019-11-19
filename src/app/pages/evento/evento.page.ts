import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  getEventos() {
    this.http.get('http://spielback.com:8000/eventos').subscribe(data => {
      this.events = data;
    })
  }

  redirect() {
    this.navCtrl.navigateForward("/tabs/create-evento");
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.http.get('http://spielback.com:8000/eventos').subscribe(data => {
        this.events = data;
        this.events = this.events.json;
      });
      event.target.complete();
    }, 2000);
  }

  deleteEvent(id: number){
    const url = "http://spielback.com:8000/delete/evento?id=" + id;
    //   console.log(url);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'jwt-token'
      }),
      params: new HttpParams().append('key', 'SpielDataBase')
    }
    // this.http.delete(url, options).subscribe(s => {
    //   console.log(s);
    // })
    this.http.post(url, {'key': 'SpielDataBase'})
      .subscribe((response)=>{
        console.log('response ',response);
      })
  }

  // deleteEvent(id: number) {
  //   this.deleteHttpEvent(id).subscribe()
  // }



}
