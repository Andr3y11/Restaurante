import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutenticateModel } from 'src/app/modelos/autenticate.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  SeinicioSesion:boolean=false;

  subs:Subscription=new Subscription();
  constructor(private AutenticacionService:AutenticacionService) { }

  ngOnInit(): void {

    this.subs=this.AutenticacionService.ObtenerDatosUsuarioEnSesion().subscribe((datos:AutenticateModel)=>{
   this.SeinicioSesion=datos.isIdentificado;
  })
  }

}
