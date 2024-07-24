import { StatusOrder } from '../../enums/status.enum';

export interface Order {
  id: string;
  itens: Array<OrderItem>;
  status: StatusOrder;
  done: boolean;
}

export interface OrderItem {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
