import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventoOrganizacion } from './evento';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {

  url: string = "spielback.com";
  eventos = [];

  item : EventoOrganizacion;

  constructor(public eventosService: EventosService, public http : HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  ngOnInit() {
  }

  // ionViewDidEnter(){
  //   this.eventosService.getEventos().then( newEventos=>{
  //     this.eventos = newEventos;
  //   });
  // }


  ionViewDidEnter(){
    console.log("dfskjdf");
    this.http.get('http://' + this.url + ':8000/eventos').subscribe((data) => {
      this.eventos = data["json"];
      console.log(this.eventos);
    })
  }

  inscribirUsuario(evento, cupos){
    this.item = new EventoOrganizacion();
    this.item.setCupo(cupos-1)
    console.log(this.item.cupos);
    this.http
    .put('http://' + this.url + ':8000/Update/eventos?id='+evento, JSON.stringify(this.item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
   }    

}
