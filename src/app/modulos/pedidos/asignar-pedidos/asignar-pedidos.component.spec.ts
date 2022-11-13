import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPedidosComponent } from './asignar-pedidos.component';

describe('AsignarPedidosComponent', () => {
  let component: AsignarPedidosComponent;
  let fixture: ComponentFixture<AsignarPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
