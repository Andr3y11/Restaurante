import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticateModel } from '../modelos/autenticate.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http:HttpClient) { }

  login(usuario:string,password:string):Observable<AutenticateModel>{
    return this.http.post<AutenticateModel>("http://localhost:3000/identificarClientes",
      {
        usuario:usuario,
        clave:password.toString(),
        

      },{
        headers:new HttpHeaders({})
  })
}
}
