import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { EventosService } from 'src/app/services/eventos.service';
import { Usuario } from 'src/app/login/usuario';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.page.html',
  styleUrls: ['./profile-tab.page.scss'],
})
export class ProfileTabPage implements OnInit {

  usuario=[];
  constructor(public events : Events, public eventosService : EventosService) { 
  }


  ngOnInit() {
  }


  ionViewDidEnter() {
    this.usuario= this.eventosService.getUsuarioActual();
    console.log(this.usuario);
  }
}
