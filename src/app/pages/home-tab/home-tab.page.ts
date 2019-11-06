import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {


  eventos = [];

  constructor(public eventosService: EventosService, public http : HttpClient ) { }

  ngOnInit() {
  }

  // ionViewDidEnter(){
  //   this.eventosService.getEventos().then( newEventos=>{
  //     this.eventos = newEventos;
  //   });
  // }


  ionViewDidEnter(){
    console.log("dfskjdf");
    this.http.get('http://54.208.191.186:8000/eventos').subscribe((data) => {
      this.eventos = data["json"];
      console.log(this.eventos);
    })
  }

  inscribirUsuario(evento){
    console.log(evento);
    
  }



}
