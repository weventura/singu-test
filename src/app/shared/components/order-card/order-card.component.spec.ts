import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardComponent } from './order-card.component';
import { ORDER_MOCK } from '../../mocks/responses/order.mock';

describe('OrderCardComponent', () => {
  let component: OrderCardComponent;
  let fixture: ComponentFixture<OrderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCardComponent],
    });

    fixture = TestBed.createComponent(OrderCardComponent);
    component = fixture.componentInstance;

    component.data = ORDER_MOCK[0].itens[0];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
