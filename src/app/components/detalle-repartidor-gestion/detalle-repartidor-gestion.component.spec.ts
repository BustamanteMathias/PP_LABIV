import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRepartidorGestionComponent } from './detalle-repartidor-gestion.component';

describe('DetalleRepartidorGestionComponent', () => {
  let component: DetalleRepartidorGestionComponent;
  let fixture: ComponentFixture<DetalleRepartidorGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRepartidorGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRepartidorGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
