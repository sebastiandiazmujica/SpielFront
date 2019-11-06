import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service'

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {


  eventos = [];

  constructor(public eventosService: EventosService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.eventosService.getEventos().then( newEventos=>{
      this.eventos = newEventos;
    });
  }

}
