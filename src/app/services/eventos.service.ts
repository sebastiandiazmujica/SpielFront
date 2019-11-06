import { Injectable } from '@angular/core';
import { Usuario } from '../login/usuario';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EventosService {

  base_path = 'http://54.208.191.186:8000/';

  usuario: Usuario;



  constructor( private http: HttpClient) {
    this.usuario = null;
   }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

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




  getEventos(){
    return fetch("https://my-json-server.typicode.com/SebastianMujica22/demo/eventos100").then(response => response.json());
    // return fetch(this.base_path + 'eventos').then(response => response.json());
  }



  getUsuarioActual(){
    return this.usuario;
  }



  //Crea un nuevo usuario
  crearUsuario(item): Observable<Usuario> {
    return this.http
    .post<Usuario>(this.base_path + 'create/usuario', JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getUsuariosHttp(login) : Observable<Usuario>{
    return this.http.get<Usuario>(this.base_path + 'gen?tabla=usuario&login=' + login);
  }

  getUsuarioLogin(credentials) {
    this.getUsuariosHttp(credentials.email).
    subscribe(response => {
      this.usuario = response;
      this.usuario = this.usuario[0];
    })
  }




}
