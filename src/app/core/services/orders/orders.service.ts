import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../../interfaces/responses/order.interface';
import { Food } from '../../interfaces/responses/food.interface';
import { StatusOrder } from '../../enums/status.enum';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private apiUrl: string = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  getAllOrders(): Observable<Array<Order>> {
    return this.httpClient.get<Array<Order>>(`${this.apiUrl}pedidos`);
  }

  createOrder(payload: Array<Food>): Observable<null> {
    return this.httpClient.post<null>(`${this.apiUrl}pedidos`, payload);
  }

  updateOrder(payload: { status: StatusOrder; id: string }): Observable<Order> {
    return this.httpClient.put<Order>(
      `${this.apiUrl}pedidos/${payload.id}/status`,
      { status: payload.status }
    );
  }

  deleteAllOrders(): Observable<null> {
    return this.httpClient.delete<null>(`${this.apiUrl}pedidos`);
  }
}
