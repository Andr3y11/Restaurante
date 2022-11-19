import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from "./AppComponent";
import { EditarClienteComponent } from './modulos/administracion/clientes/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './modulos/administracion/clientes/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './modulos/administracion/clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarClienteComponent } from './modulos/administracion/clientes/buscar-cliente/buscar-cliente.component';
import { PlantillaComponent } from './plantilla/plantilla/plantilla.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { EncabezadoComponent } from './plantilla/encabezado/encabezado.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './plantilla/error/error.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    
    EditarClienteComponent,
    CrearClienteComponent,
    EliminarClienteComponent,
    BuscarClienteComponent,
    PlantillaComponent,
    //PiePaginaComponent,
    //EncabezadoComponent,
    //InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
