import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-evento',
  templateUrl: './create-evento.page.html',
  styleUrls: ['./create-evento.page.scss'],
})
export class CreateEventoPage implements OnInit {

  formgroup: FormGroup;
  descripcion: AbstractControl;
  cupos: AbstractControl;
  lugar: AbstractControl;
  fechainicio: AbstractControl;
  fechafin: AbstractControl;
  url: string = "spielback.com";
  events: any;

  private handleError(error: HttpErrorResponse) {
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
  

  constructor(public formbuilder: FormBuilder, private http: HttpClient, private navCtrl: NavController) {

    this.formgroup = formbuilder.group({
      descripcion:['', Validators.required],
      lugar:['', Validators.required],
      fechainicio:['', Validators.required],
      fechafin:['', Validators.required],
      cupos:['', Validators.required],

    });

    this.descripcion = this.formgroup.controls['descripcion'];
    this.lugar = this.formgroup.controls['lugar'];
    this.fechainicio = this.formgroup.controls['fechainicio'];
    this.fechafin = this.formgroup.controls['fechafin'];
    this.cupos = this.formgroup.controls['cupos'];
   }

  ngOnInit() {
  }

  logForm() {

    if(this.formgroup.valid){
      alert('User form is valid!!')
    } else {
      console.log(this.descripcion.valid)
      console.log(this.lugar.valid)
      console.log(this.fechainicio.valid)
      console.log(this.fechafin.valid)
      console.log(this.cupos.valid)


      alert('User form is not valid!!')
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log(this.formgroup.value);

    // return this.http.post('http://spielback.com:8000/create/evento', this.formgroup.value, httpOptions)
    // .pipe(
    //   catchError(this.handleError)
    // );
    if(this.formgroup.valid){
      this.http.post('http://'+ this.url + ':8000/create/evento', this.formgroup.value)
      .subscribe((response)=>{
        console.log('response ',response);
      })
      this.navCtrl.navigateForward("/tabs/evento");
    }

  }

}
