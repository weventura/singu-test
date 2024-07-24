import { StatusOrder } from 'src/app/core/enums/status.enum';
import { Order } from 'src/app/core/interfaces/responses/order.interface';

export const ORDER_MOCK: Array<Order> = [
  {
    id: '1721769756735',
    itens: [
      {
        id: 1,
        image: 'assets/images/food_001.png',
        title: 'Torta de frango',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 90,
      },
      {
        id: 2,
        image: 'assets/images/food_002.png',
        title: 'Churrasco',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 80,
      },
    ],
    status: StatusOrder.ENTREGUE,
    done: true,
  },
  {
    id: '172176975777',
    itens: [
      {
        id: 1,
        image: 'assets/images/food_001.png',
        title: 'Torta de frango',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 90,
      },
      {
        id: 2,
        image: 'assets/images/food_002.png',
        title: 'Churrasco',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 80,
      },
    ],
    status: StatusOrder.PENDENTE,
    done: false,
  },
  {
    id: '1721769756333',
    itens: [
      {
        id: 1,
        image: 'assets/images/food_001.png',
        title: 'Torta de frango',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 90,
      },
      {
        id: 2,
        image: 'assets/images/food_002.png',
        title: 'Churrasco',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 80,
      },
    ],
    status: StatusOrder.PREPARACAO,
    done: false,
  },
  {
    id: '17217697562211',
    itens: [
      {
        id: 1,
        image: 'assets/images/food_001.png',
        title: 'Torta de frango',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 90,
      },
      {
        id: 2,
        image: 'assets/images/food_002.png',
        title: 'Churrasco',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 80,
      },
    ],
    status: StatusOrder.PRONTO,
    done: false,
  },
];
