import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarEmpleadoComponent } from './Empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './Empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './Empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './Empleados/eliminar-empleado/eliminar-empleado.component';
import { BuscarFacturaComponent } from './Facturas/buscar-factura/buscar-factura.component';
import { CrearFacturaComponent } from './Facturas/crear-factura/crear-factura.component';
import { EditarFacturaComponent } from './Facturas/editar-factura/editar-factura.component';
import { EliminarFacturaComponent } from './Facturas/eliminar-factura/eliminar-factura.component';
import { BuscarProductoComponent } from './Productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './Productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './Productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './Productos/eliminar-producto/eliminar-producto.component';
import { BuscarRestauranteComponent } from './Restaurante/buscar-restaurante/buscar-restaurante.component';
import { CrearRestauranteComponent } from './Restaurante/crear-restaurante/crear-restaurante.component';
import { EditarRestauranteComponent } from './Restaurante/editar-restaurante/editar-restaurante.component';
import { EliminarRestauranteComponent } from './Restaurante/eliminar-restaurante/eliminar-restaurante.component';

const routes: Routes = [
  {
    path:'agregar-cliente',
    component:CrearClienteComponent
  },
  {
    path:'eliminar-cliente',
    component:EliminarClienteComponent
  },
  {
    path:'actualizar-cliente',
    component:EditarClienteComponent
  },
  {
    path:'buscar-cliente',
    component:BuscarClienteComponent
  },
  {
    path:'agregar-empleado',
    component:CrearEmpleadoComponent
  },
  {
    path:'eliminar-empleado',
    component:EliminarEmpleadoComponent
  },
  {
    path:'actualizar-empleado',
    component:EditarEmpleadoComponent
  },
  {
    path:'buscar-empleado',
    component:BuscarEmpleadoComponent
  },
  {
    path:'agregar-facturas',
    component:CrearFacturaComponent
  },
  {
    path:'eliminar-facturas',
    component:EliminarFacturaComponent
  },
  {
    path:'actualizar-facturas',
    component:EditarFacturaComponent
  },
  {
    path:'buscar-facturas',
    component:BuscarFacturaComponent
  },
  {
    path:'agregar-producto',
    component:CrearProductoComponent
  },
  {
    path:'eliminar-producto',
    component:EliminarProductoComponent
  },
  {
    path:'actualizar-producto',
    component:EditarProductoComponent
  },
  {
    path:'buscar-producto',
    component:BuscarProductoComponent
  },
  {
    path:'agregar-restaurante',
    component:CrearRestauranteComponent
  },
  {
    path:'eliminar-restaurante',
    component:EliminarRestauranteComponent
  },
  {
    path:'actualizar-restaurante',
    component:EditarRestauranteComponent
  },
  {
    path:'buscar-restaurante',
    component:BuscarRestauranteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
