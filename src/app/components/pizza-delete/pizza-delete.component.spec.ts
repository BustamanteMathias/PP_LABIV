import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDeleteComponent } from './pizza-delete.component';

describe('PizzaDeleteComponent', () => {
  let component: PizzaDeleteComponent;
  let fixture: ComponentFixture<PizzaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
