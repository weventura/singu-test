import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Food } from '../../interfaces/responses/food.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl: string = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  getAllCart(): Observable<Array<Food>> {
    return this.httpClient.get<Array<Food>>(`${this.apiUrl}carrinho`);
  }

  addToCart(payload: Food): Observable<Array<Food>> {
    return this.httpClient.post<Array<Food>>(`${this.apiUrl}carrinho`, payload);
  }

  deleteItem(id: number): Observable<Array<Food>> {
    return this.httpClient.delete<Array<Food>>(`${this.apiUrl}carrinho/${id}`);
  }

  deleteAll(): Observable<null> {
    return this.httpClient.delete<null>(`${this.apiUrl}carrinho`);
  }
}
