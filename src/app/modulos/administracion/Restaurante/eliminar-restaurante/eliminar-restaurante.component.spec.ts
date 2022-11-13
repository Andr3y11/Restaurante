import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRestauranteComponent } from './eliminar-restaurante.component';

describe('EliminarRestauranteComponent', () => {
  let component: EliminarRestauranteComponent;
  let fixture: ComponentFixture<EliminarRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRestauranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
