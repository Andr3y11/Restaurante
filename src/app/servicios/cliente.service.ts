import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.modelo';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url='http://localhost:3000';
  token:string=' ';
  constructor(private http:HttpClient, private autenticacionservices:AutenticacionService) {
    this.token=this.autenticacionservices.ObtenerToken();
   }


  ObtenerRegistros():Observable<ModeloCliente[]>{
    return this.http.get<ModeloCliente[]>('http://localhost:3000/clientes')
   
  }

  CrearCliente(cliente:ModeloCliente):Observable<ModeloCliente>{
    return this.http.post<ModeloCliente>("http://localhost:3000/clientes",cliente,{
      headers: new HttpHeaders({
        'Autorization':`Bearer ${this.token}`
      })
    })
   
  }

  ActualizarCliente(cliente:ModeloCliente):Observable<ModeloCliente>{
    return this.http.put<ModeloCliente>("http://localhost:3000/clientes",cliente,{
      headers: new HttpHeaders({
        'Autorization':`Bearer ${this.token}`
      })
    })
   
  }

  EliminarCliente(id:string):Observable<any>{
    return this.http.delete(`http://localhost:3000/clientes/${id}`,{
      headers: new HttpHeaders({
        'Autorization':`Bearer ${this.token}`
      })
    })
   
  }
}
