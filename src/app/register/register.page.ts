import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { NavController } from "@ionic/angular";
import { EventosService } from '../services/eventos.service';
import { Usuario } from '../login/usuario';

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage {

  usuario : Usuario;

  registerForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: " El email es requerido" },
      { type: "pattern", message: "ojo! este no es un email válido" }
    ],
    password: [
      { type: "required", message: " El password es requerido" },
      { type: "minlength", message: "Minimo 5 letras para el password" }
    ]
  };
  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    public eventosService : EventosService
  ) {
    this.usuario = new Usuario();
    this.registerForm = this.formBuilder.group({
      login: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      contrasena: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      nombre: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      posicion: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      foto: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      organizacion: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),

    });
  }

  register(information){
    this.usuario.apellido= information.apellido;
    this.usuario.asistencia = information.asistencia;
    this.usuario.calificacion= information.calificacion;
    this.usuario.contrasena = information.contrasena;
    this.usuario.foto = information.foto;
    this.usuario.idorganizacion = information.organizacion;
    this.usuario.login = information.login;
    this.usuario.nombre = information.nombre;
    this.usuario.posicionpreferida = information.posicion;
    console.log(this.usuario);
    this.eventosService.crearUsuario(this.usuario).subscribe((response)=>{
    this.navCtrl.navigateForward("/login");
    });
  }
}
