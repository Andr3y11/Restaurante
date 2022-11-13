import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRestauranteComponent } from './buscar-restaurante.component';

describe('BuscarRestauranteComponent', () => {
  let component: BuscarRestauranteComponent;
  let fixture: ComponentFixture<BuscarRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRestauranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
