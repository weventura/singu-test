import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from 'src/app/core/interfaces/responses/food.interface';

@Component({
  selector: 'singu-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent {
  @Output() event = new EventEmitter<Food>();
  @Input() data!: Food;

  onDelete(): void {
    this.event.emit(this.data);
  }
}
