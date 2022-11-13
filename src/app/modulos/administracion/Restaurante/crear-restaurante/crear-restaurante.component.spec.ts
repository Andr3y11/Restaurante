import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRestauranteComponent } from './crear-restaurante.component';

describe('CrearRestauranteComponent', () => {
  let component: CrearRestauranteComponent;
  let fixture: ComponentFixture<CrearRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRestauranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
