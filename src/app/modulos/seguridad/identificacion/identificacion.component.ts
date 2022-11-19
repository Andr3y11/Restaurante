import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
var CryptoJS=require("crypto-js");

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  validaciones:FormGroup=this.fb.group({
    'usuario':['',[Validators.required,Validators.email]],
    'password':['',[Validators.required,]]
  })
  constructor(private fb:FormBuilder,
    private servicioAutenticacion:AutenticacionService,
    private router:Router ) { }

  ngOnInit(): void {
  }
//Metodo para el login usuarios
  login(){
    const usuario=this.validaciones.controls["usuario"].value;
    const password=this.validaciones.controls["password"].value;
    let CypherPassword =CryptoJS.MD5(password);
    this.servicioAutenticacion.login(usuario,CypherPassword).subscribe(
      (datos:any)=>{
        this.servicioAutenticacion.AlmacenarSesion(datos);
        alert("Datos correctos")
        console.log("La informacion se guardo de forma correcta");
        this.router.navigate(["/home"]);
      },(error:any)=>{
        alert("Datos incorrectos")
        console.log("Los datos enviados son invalidos");
      })
  }
}
