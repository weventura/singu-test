import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { MockComponent } from 'ng-mocks';
import { EmptyStateComponent } from 'src/app/shared/components/empty-state/empty-state.component';
import { of } from 'rxjs';
import { ORDER_MOCK } from 'src/app/shared/mocks/responses/order.mock';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let orderService: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent, MockComponent(EmptyStateComponent)],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [OrdersService],
    });

    orderService = TestBed.inject(OrdersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called onGetOrders and startOrderStatusUpdate method in OnInit', () => {
    const onGetOrdersSpy = spyOn(component, 'onGetOrders');
    const startOrderStatusUpdateSpy = spyOn(
      component,
      'startOrderStatusUpdate'
    );

    component.ngOnInit();

    expect(onGetOrdersSpy).toHaveBeenCalledTimes(1);
    expect(startOrderStatusUpdateSpy).toHaveBeenCalledTimes(1);
  });

  it('should called getAllOrders from orderService', () => {
    const getAllOrderssSpy = spyOn(
      orderService,
      'getAllOrders'
    ).and.returnValue(of(ORDER_MOCK));

    component.onGetOrders();

    expect(getAllOrderssSpy).toHaveBeenCalledTimes(1);
    expect(component.orders).toBeDefined();
  });

  it('should delete all orders', () => {
    const deleteAllOrdersSpy = spyOn(
      orderService,
      'deleteAllOrders'
    ).and.returnValue(of(null));
    const onGetOrdersSpy = spyOn(component, 'onGetOrders');

    component.onClearOrders();

    expect(deleteAllOrdersSpy).toHaveBeenCalledTimes(1);
    expect(onGetOrdersSpy).toHaveBeenCalledTimes(1);
  });

  it('should called update order (ENTREGUE)', () => {
    const order = ORDER_MOCK[0];

    const updateOrderSpy = spyOn(orderService, 'updateOrder').and.returnValue(
      of(order)
    );

    component.onUpdateStatusOrder(order);

    expect(updateOrderSpy).toHaveBeenCalledTimes(1);
  });

  it('should called update order (PENDENTE)', () => {
    const order = ORDER_MOCK[1];

    const updateOrderSpy = spyOn(orderService, 'updateOrder').and.returnValue(
      of(order)
    );

    component.onUpdateStatusOrder(order);

    expect(updateOrderSpy).toHaveBeenCalledTimes(1);
  });

  it('should called update order (PREPARACAO)', () => {
    const order = ORDER_MOCK[2];

    const updateOrderSpy = spyOn(orderService, 'updateOrder').and.returnValue(
      of(order)
    );

    component.onUpdateStatusOrder(order);

    expect(updateOrderSpy).toHaveBeenCalledTimes(1);
  });

  it('should called update order (PRONTO)', () => {
    const order = ORDER_MOCK[3];

    const updateOrderSpy = spyOn(orderService, 'updateOrder').and.returnValue(
      of(order)
    );

    component.onUpdateStatusOrder(order);

    expect(updateOrderSpy).toHaveBeenCalledTimes(1);
  });

  it('should called update order (DEFAULT)', () => {
    const order = ORDER_MOCK[3];

    const updateOrderSpy = spyOn(orderService, 'updateOrder').and.returnValue(
      of(order)
    );

    component.onUpdateStatusOrder(order);

    expect(updateOrderSpy).toHaveBeenCalledTimes(1);
  });
});
