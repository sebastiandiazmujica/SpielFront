import { Injectable } from '@angular/core';
import { Usuario } from '../login/usuario';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  base_path = 'http://3.84.188.169:8000/';

  usuario=[];


  constructor( private http: HttpClient) { }

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


  getEventos(){
    return fetch("https://my-json-server.typicode.com/SebastianMujica22/demo/eventos100").then(response => response.json());
  }

  getUsuarios(){
    return fetch("https://my-json-server.typicode.com/SebastianMujica22/demo/usuarios").then(response => response.json());
  }

  actualizarUsuario(usuario){
    this.usuario = usuario;
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




}
