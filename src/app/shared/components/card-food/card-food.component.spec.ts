import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFoodComponent } from './card-food.component';
import { FOOD_MOCK } from '../../mocks/responses/food.mock';

describe('CardFoodComponent', () => {
  let component: CardFoodComponent;
  let fixture: ComponentFixture<CardFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFoodComponent],
    });

    fixture = TestBed.createComponent(CardFoodComponent);
    component = fixture.componentInstance;

    component.data = FOOD_MOCK[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    const eventSpy = spyOn(component.event, 'emit');

    component.onSelect();

    expect(eventSpy).toHaveBeenCalledWith(component.data);
  });
});
