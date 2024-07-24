import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FOOD_MOCK } from 'src/app/shared/mocks/responses/food.mock';
import { environment } from 'src/environments/environment';

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cart itens data to the API', () => {
    service.getAllCart().subscribe((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(FOOD_MOCK);
    });

    const api = httpMock.expectOne(`${environment.api_url}carrinho`);

    expect(api.request.method).toEqual('GET');

    api.flush(FOOD_MOCK);
  });

  it('should add cart data to the API', () => {
    const payload = FOOD_MOCK[0];

    service.addToCart(payload).subscribe((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(FOOD_MOCK);
    });

    const api = httpMock.expectOne(`${environment.api_url}carrinho`);

    expect(api.request.method).toEqual('POST');
    expect(api.request.body).toEqual(payload);

    api.flush(FOOD_MOCK);
  });

  it('should delete item from cart data to the API', () => {
    const payload = FOOD_MOCK[0];

    service.deleteItem(payload.id).subscribe((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(FOOD_MOCK);
    });

    const api = httpMock.expectOne(
      `${environment.api_url}carrinho/${payload.id}`
    );

    expect(api.request.method).toEqual('DELETE');

    api.flush(FOOD_MOCK);
  });

  it('should delete all itens from cart data to the API', () => {
    service.deleteAll().subscribe((response) => {
      expect(response).toBeNull();
      expect(response).toEqual(null);
    });

    const api = httpMock.expectOne(`${environment.api_url}carrinho`);

    expect(api.request.method).toEqual('DELETE');

    api.flush(null);
  });
});
