import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
Id:string="";


  fgValidador:FormGroup=this.fb.group({
    'Id':['',[Validators.required]],
    'Nombre':['',[Validators.required]],
    'Cedula':['',[Validators.required]],
    'correo':['',[Validators.required]]


  })

  constructor(private fb:FormBuilder,
    private serviciocliente:ClienteService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id=this.route.snapshot.params["Id"];
    this.BuscarCliente();
  }

  BuscarCliente(){
    this.serviciocliente.ObtenerRegistrosPorId(this.Id).subscribe((datos: ModeloCliente)=>{
      this.fgValidador.controls["Id"].setValue(this.Id);
      this.fgValidador.controls["Nombre"].setValue(datos.Nombre);
      this.fgValidador.controls["Cedula"].setValue(datos.Cedula);
      this.fgValidador.controls["correo"].setValue(datos.correo);
    })
  }

  EditarCliente(){
    let Nombre=this.fgValidador.controls["Nombre"].value;
    let Cedula=this.fgValidador.controls["Cedula"].value;
    let correo=this.fgValidador.controls["correo"].value;
    let p = new ModeloCliente();
    p.Nombre=Nombre;
    p.Cedula=Cedula;
    p.correo=correo;
    p.Id=this.Id;
    this.serviciocliente.ActualizarCliente(p).subscribe((datos:ModeloCliente)=>{
      alert("Cliente Actualizado Correctamente");
      this.router.navigate(["/administracion/listar-cliente"]);


    }, (error:any)=>{
      alert("Error al Actualizar el Cliente")
    

    })

  }
}
