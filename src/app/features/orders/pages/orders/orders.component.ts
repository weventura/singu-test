import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/interfaces/responses/order.interface';
import { StatusOrder } from 'src/app/core/enums/status.enum';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'singu-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  private intervalId: ReturnType<typeof setInterval> | undefined;

  orders: Array<Order> = [];
  searchValue!: string;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.onGetOrders();
    this.startOrderStatusUpdate();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onGetOrders(): void {
    this.ordersService.getAllOrders().subscribe({
      next: (response) => {
        this.orders = response;
      },
    });
  }

  onClearOrders(): void {
    this.ordersService.deleteAllOrders().subscribe({
      next: () => this.onGetOrders(),
    });
  }

  onUpdateStatusOrder(order: Order): void {
    const payload = {
      id: order.id,
      status: order.status,
    };

    this.ordersService.updateOrder(payload).subscribe({
      next: (response) => {
        order.status = this.onNextStatus(order.status);
        order.done = response.done;
      },
    });
  }

  onNextStatus(currentStatus: StatusOrder): StatusOrder {
    let status = StatusOrder.PENDENTE;

    switch (currentStatus) {
      case StatusOrder.PENDENTE:
        status = StatusOrder.PREPARACAO;
        break;
      case StatusOrder.PREPARACAO:
        status = StatusOrder.PRONTO;
        break;
      case StatusOrder.PRONTO:
        status = StatusOrder.ENTREGUE;
        break;
      case StatusOrder.ENTREGUE:
        status = StatusOrder.ENTREGUE; // Mantém o status como 'ENTREGUE'
        break;
      default:
        status = StatusOrder.PENDENTE;
    }

    return status;
  }

  async startOrderStatusUpdate(): Promise<void> {
    this.intervalId = setInterval(async () => {
      await this.updateOrderStatus();
    }, 4000);
  }

  async updateOrderStatus(): Promise<void> {
    for (const order of this.orders) {
      if (!order.done) {
        await this.onUpdateStatusOrder(order);
      }
    }
  }
}
