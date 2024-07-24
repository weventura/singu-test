import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/core/interfaces/responses/order.interface';

@Component({
  selector: 'singu-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  @Input() data!: OrderItem;
}
