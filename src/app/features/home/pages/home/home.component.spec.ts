import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { FoodsService } from 'src/app/core/services/foods/foods.service';
import { MockComponent, MockModule } from 'ng-mocks';
import { DrawerComponent } from 'src/app/shared/components/drawer/drawer.component';
import { FormsModule } from '@angular/forms';
import { EmptyStateComponent } from 'src/app/shared/components/empty-state/empty-state.component';
import { of } from 'rxjs';
import { FOOD_MOCK } from 'src/app/shared/mocks/responses/food.mock';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let foodsService: FoodsService;
  let cartService: CartService;
  let orderService: OrdersService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockComponent(DrawerComponent),
        MockComponent(EmptyStateComponent),
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MockModule(FormsModule),
      ],
      providers: [FoodsService, CartService, OrdersService, Router],
    });

    foodsService = TestBed.inject(FoodsService);
    cartService = TestBed.inject(CartService);
    orderService = TestBed.inject(OrdersService);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called onGetAllFood and onGetAllCart method in OnInit', () => {
    const onGetAllFoodSpy = spyOn(component, 'onGetAllFood');
    const onGetAllCartSpy = spyOn(component, 'onGetAllCart');

    component.ngOnInit();

    expect(onGetAllFoodSpy).toHaveBeenCalledTimes(1);
    expect(onGetAllCartSpy).toHaveBeenCalledTimes(1);
  });

  it('should called onGetAllFood and return food list', () => {
    const getAllFoodsSpy = spyOn(foodsService, 'getAllFoods').and.returnValue(
      of(FOOD_MOCK)
    );
    const nextSpy = spyOn(component.listFiltered$, 'next');

    component.onGetAllFood();

    expect(getAllFoodsSpy).toHaveBeenCalledTimes(1);
    expect(nextSpy).toHaveBeenCalledWith(component.listFood);
    expect(component.listFood).toBeDefined();
  });

  it('should called onGetAllCart and return food list', () => {
    const getAllCartSpy = spyOn(cartService, 'getAllCart').and.returnValue(
      of(FOOD_MOCK)
    );

    component.onGetAllCart();

    expect(getAllCartSpy).toHaveBeenCalledTimes(1);
    expect(component.listCart).toBeDefined();
  });

  it('should change openCart variable to true', () => {
    component.onCart();

    expect(component.openCart).toBeTruthy();
  });

  it('should change openCart variable to false', () => {
    component.onCloseCart();

    expect(component.openCart).toBeFalsy();
  });

  it('should filter listFiltered$ list with searchValue', () => {
    component.searchValue = 'Churrasco';
    component.listFood = FOOD_MOCK;

    const nextSpy = spyOn(component.listFiltered$, 'next');

    component.onFilterBySearch();

    expect(nextSpy).toHaveBeenCalledTimes(1);
  });

  it('should filter listFiltered$ list with searchValue null', () => {
    component.searchValue = '';
    component.listFood = FOOD_MOCK;

    const nextSpy = spyOn(component.listFiltered$, 'next');

    component.onFilterBySearch();

    expect(nextSpy).toHaveBeenCalledTimes(1);
  });

  it('should called createOrder from orderService', () => {
    const createOrderSpy = spyOn(orderService, 'createOrder').and.returnValue(
      of(null)
    );
    const routerSpy = spyOn(router, 'navigate');
    const onGetAllCartSpy = spyOn(component, 'onGetAllCart');

    component.onCreateOrder();

    expect(createOrderSpy).toHaveBeenCalledTimes(1);
    expect(routerSpy).toHaveBeenCalledWith(['orders']);
    expect(onGetAllCartSpy).toHaveBeenCalledTimes(1);
  });

  it('should called addToCart from cartService', () => {
    const addToCartSpy = spyOn(cartService, 'addToCart').and.returnValue(
      of(FOOD_MOCK)
    );

    const food = FOOD_MOCK[0];

    component.onSelectFood(food);

    expect(addToCartSpy).toHaveBeenCalledTimes(1);
    expect(component.listCart).toBeDefined();
  });

  it('should called deleteItem from cartService and remove item', () => {
    const deleteItemSpy = spyOn(cartService, 'deleteItem').and.returnValue(
      of(FOOD_MOCK)
    );

    const food = FOOD_MOCK[0];

    component.onDeleteItemFromCart(food);

    expect(deleteItemSpy).toHaveBeenCalledTimes(1);
    expect(component.listCart).toBeDefined();
  });

  it('should called deleteAll from cartService and remove all itens', () => {
    const deleteAllSpy = spyOn(cartService, 'deleteAll').and.returnValue(
      of(null)
    );
    const onGetAllCartSpy = spyOn(component, 'onGetAllCart');

    component.onDeleteAllCarts();

    expect(deleteAllSpy).toHaveBeenCalledTimes(1);
    expect(onGetAllCartSpy).toHaveBeenCalledTimes(1);
  });
});
