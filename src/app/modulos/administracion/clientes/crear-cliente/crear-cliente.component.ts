import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    'Nombre':['',[Validators.required]],
    'Cedula':['',[Validators.required]],
    'correo':['',[Validators.required]]


  })

  constructor(private fb:FormBuilder,
    private serviciocliente:ClienteService,
    private router:Router) { }
  
  ngOnInit(): void {
  }

   GuardarCliente(){
    let Nombre=this.fgValidador.controls["Nombre"].value;
    let Cedula=this.fgValidador.controls["Cedula"].value;
    let correo=this.fgValidador.controls["correo"].value;
    let p = new ModeloCliente();
    p.Nombre=Nombre;
    p.Cedula=Cedula;
    p.correo=correo;
    this.serviciocliente.CrearCliente(p).subscribe((datos:ModeloCliente)=>{
      alert("Cliente Agregado Correctamente");
      this.router.navigate(["/administracion/listar-cliente"]);


    }, (error:any)=>{
      alert("Error al Agregar el Cliente")
      

    })


   } 

}
