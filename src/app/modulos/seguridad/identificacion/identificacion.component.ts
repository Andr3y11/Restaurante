import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private servicioAutenticacion:AutenticacionService ) { }

  ngOnInit(): void {
  }
//Metodo para el login usuarios
  login(){
    const usuario=this.validaciones.controls["usuario"].value;
    const password=this.validaciones.controls["password"].value;
    let CypherPassword =CryptoJS.MD5(password);
    this.servicioAutenticacion.login(usuario,CypherPassword).subscribe(
      (datos:any)=>{
        console.log("La informacion se guardo de forma correcta");
      },(error:any)=>{
        console.log("Los datos enviados son invalidos");
      })
  }
}
