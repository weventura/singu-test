import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from 'src/app/core/interfaces/responses/food.interface';

@Component({
  selector: 'singu-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss'],
})
export class CardFoodComponent {
  @Input() data!: Food;
  @Output() event = new EventEmitter<Food>();

  onSelect(): void {
    this.event.emit(this.data);
  }
}
