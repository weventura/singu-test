import { Food } from 'src/app/core/interfaces/responses/food.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private apiUrl: string = environment.api_url;

  constructor(private httpClient: HttpClient) {}

  getAllFoods(): Observable<Array<Food>> {
    return this.httpClient.get<Array<Food>>(`${this.apiUrl}pratos`);
  }
}
