import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Food } from 'src/app/core/interfaces/responses/food.interface';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { FoodsService } from 'src/app/core/services/foods/foods.service';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'singu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listFiltered$!: BehaviorSubject<Array<Food>>;

  listFood: Array<Food> = [];
  listCart: Array<Food> = [];

  searchValue!: string;

  openCart = false;

  constructor(
    private foodsService: FoodsService,
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.listFiltered$ = new BehaviorSubject<Array<Food>>([]);
  }

  ngOnInit(): void {
    this.onGetAllFood();
    this.onGetAllCart();
  }

  onGetAllFood(): void {
    this.foodsService.getAllFoods().subscribe({
      next: (response) => {
        this.listFood = response;
        this.listFiltered$.next(this.listFood);
      },
    });
  }

  onGetAllCart(): void {
    this.cartService.getAllCart().subscribe({
      next: (response) => {
        this.listCart = response;
      },
    });
  }

  onCart(): void {
    this.openCart = true;
  }

  onCloseCart(): void {
    this.openCart = false;
  }

  onFilterBySearch(): void {
    const value = this.searchValue.trim();

    if (value !== '' && value !== null) {
      const filtered = this.listFood.filter((item) =>
        item.title.toLowerCase().includes(value)
      );

      this.listFiltered$.next(filtered);
    } else {
      this.listFiltered$.next(this.listFood);
    }
  }

  onCreateOrder(): void {
    this.ordersService.createOrder(this.listCart).subscribe({
      next: () => {
        this.router.navigate(['orders']);

        this.onGetAllCart();
      },
    });
  }

  onSelectFood(food: Food): void {
    this.cartService.addToCart(food).subscribe({
      next: (response) => {
        this.listCart = response;
      },
    });
  }

  onDeleteItemFromCart(event: Food): void {
    this.cartService.deleteItem(event.id).subscribe({
      next: (response) => {
        this.listCart = response;
      },
    });
  }

  onDeleteAllCarts(): void {
    this.cartService.deleteAll().subscribe({
      next: () => this.onGetAllCart(),
    });
  }
}
