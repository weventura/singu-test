import { Component, Input } from '@angular/core';
import { StatusOrder } from 'src/app/core/enums/status.enum';

@Component({
  selector: 'singu-status-order',
  templateUrl: './status-order.component.html',
  styleUrls: ['./status-order.component.scss'],
})
export class StatusOrderComponent {
  readonly status = StatusOrder;

  @Input() data!: StatusOrder;
  @Input() label!: string;
}
