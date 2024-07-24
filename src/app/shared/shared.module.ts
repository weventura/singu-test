import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFoodComponent } from './components/card-food/card-food.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { StatusOrderComponent } from './components/status-order/status-order.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

const resources = [
  CardFoodComponent,
  OrderCardComponent,
  CartCardComponent,
  HeaderComponent,
  StatusOrderComponent,
  EmptyStateComponent,
  DrawerComponent,
];

@NgModule({
  declarations: [...resources],
  imports: [CommonModule],
  exports: [...resources],
})
export class SharedModule {}
