import { FOOD_MOCK } from './../../mocks/responses/food.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCardComponent } from './cart-card.component';

describe('CartCardComponent', () => {
  let component: CartCardComponent;
  let fixture: ComponentFixture<CartCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartCardComponent],
    });
    fixture = TestBed.createComponent(CartCardComponent);
    component = fixture.componentInstance;

    component.data = FOOD_MOCK[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    const eventSpy = spyOn(component.event, 'emit');

    component.onDelete();

    expect(eventSpy).toHaveBeenCalledTimes(1);
  });
});
