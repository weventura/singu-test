import { TestBed } from '@angular/core/testing';

import { FoodsService } from './foods.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FOOD_MOCK } from 'src/app/shared/mocks/responses/food.mock';
import { environment } from 'src/environments/environment';

describe('FoodsService', () => {
  let service: FoodsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(FoodsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get foods data to the API', () => {
    service.getAllFoods().subscribe((response) => {
      expect(response).toBeDefined();
      expect(response).toEqual(FOOD_MOCK);
    });

    const api = httpMock.expectOne(`${environment.api_url}pratos`);

    expect(api.request.method).toEqual('GET');

    api.flush(FOOD_MOCK);
  });
});
