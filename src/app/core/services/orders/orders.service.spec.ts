import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ORDER_MOCK } from 'src/app/shared/mocks/responses/order.mock';
import { environment } from 'src/environments/environment';
import { FOOD_MOCK } from 'src/app/shared/mocks/responses/food.mock';
import { StatusOrder } from '../../enums/status.enum';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get orders data to the API', () => {
    service.getAllOrders().subscribe((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(ORDER_MOCK);
    });

    const api = httpMock.expectOne(`${environment.api_url}pedidos`);

    expect(api.request.method).toEqual('GET');

    api.flush(ORDER_MOCK);
  });

  it('should create order data to the API', () => {
    const payload = FOOD_MOCK;

    service.createOrder(payload).subscribe((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(null);
    });

    const api = httpMock.expectOne(`${environment.api_url}pedidos`);

    expect(api.request.method).toEqual('POST');
    expect(api.request.body).toEqual(payload);

    api.flush(null);
  });

  it('should update order data to the API', () => {
    const payload = { status: StatusOrder.PREPARACAO, id: '123' };
    const response = ORDER_MOCK[0];

    service.updateOrder(payload).subscribe((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(response);
    });

    const api = httpMock.expectOne(
      `${environment.api_url}pedidos/${payload.id}/status`
    );

    expect(api.request.method).toEqual('PUT');

    api.flush(response);
  });

  it('should delete order data to the API', () => {
    service.deleteAllOrders().subscribe((response) => {
      expect(response).toBeNull;
    });

    const api = httpMock.expectOne(`${environment.api_url}pedidos`);

    expect(api.request.method).toEqual('DELETE');

    api.flush(null);
  });
});
