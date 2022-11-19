import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AutenticateModel } from '../modelos/autenticate.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  datosUsuarioEnSesion=new BehaviorSubject<AutenticateModel>(new AutenticateModel() )

  constructor(private http:HttpClient) { 
    this.VerificarSesionActual();
  }


  VerificarSesionActual(){

    let datos=this.ObtenerInformacionSesion();
    if (datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos:AutenticateModel){
    this.datosUsuarioEnSesion.next(datos);

  }

  ObtenerDatosUsuarioEnSesion(){

    return this.datosUsuarioEnSesion.asObservable();

  }


  login(usuario:string,password:string):Observable<AutenticateModel>{
    return this.http.post<AutenticateModel>("http://localhost:3000/identificarClientes",
      {
        usuario:usuario,
        clave:password.toString(),
        

      },{
        headers:new HttpHeaders({})
  })
}


AlmacenarSesion(datos:AutenticateModel){
  datos.isIdentificado=true;
  let stringDatos=JSON.stringify(datos);
  localStorage.setItem("datosSesion",stringDatos);
  this.RefrescarDatosSesion(datos);
}

ObtenerInformacionSesion(){
  let datosString=localStorage.getItem("datosSesion");
  if (datosString){
    let datos=JSON.parse(datosString);
    return datos;
  }else{
    return null;
  }
}



EliminarInformacionSesion(){
  localStorage.removeItem("datosSesion")
  this.RefrescarDatosSesion(new AutenticateModel());
}

SeHaIniciadoSesion(){
let datosString=localStorage.getItem("datosSesion");
return datosString;

}

ObtenerToken(){
  let datosString=localStorage.getItem("datosSesion");
  if(datosString){
    let datos=JSON.parse(datosString);
    return datos.tk;
  }else{
    return '';
  }


}

}
