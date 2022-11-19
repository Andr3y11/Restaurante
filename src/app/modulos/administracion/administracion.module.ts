import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearProductoComponent } from './Productos/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './Productos/eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './Productos/editar-producto/editar-producto.component';
import { BuscarProductoComponent } from './Productos/buscar-producto/buscar-producto.component';
import { BuscarEmpleadoComponent } from './Empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './Empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './Empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './Empleados/eliminar-empleado/eliminar-empleado.component';
import { EliminarFacturaComponent } from './Facturas/eliminar-factura/eliminar-factura.component';
import { CrearFacturaComponent } from './Facturas/crear-factura/crear-factura.component';
import { EditarFacturaComponent } from './Facturas/editar-factura/editar-factura.component';
import { BuscarFacturaComponent } from './Facturas/buscar-factura/buscar-factura.component';
import { BuscarRestauranteComponent } from './Restaurante/buscar-restaurante/buscar-restaurante.component';
import { CrearRestauranteComponent } from './Restaurante/crear-restaurante/crear-restaurante.component';
import { EditarRestauranteComponent } from './Restaurante/editar-restaurante/editar-restaurante.component';
import { EliminarRestauranteComponent } from './Restaurante/eliminar-restaurante/eliminar-restaurante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearProductoComponent,
    EliminarProductoComponent,
    EditarProductoComponent,
    BuscarProductoComponent,
    BuscarEmpleadoComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    EliminarEmpleadoComponent,
    EliminarFacturaComponent,
    CrearFacturaComponent,
    EditarFacturaComponent,
    BuscarFacturaComponent,
    BuscarRestauranteComponent,
    CrearRestauranteComponent,
    EditarRestauranteComponent,
    EliminarRestauranteComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
