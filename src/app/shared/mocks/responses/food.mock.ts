import { Food } from 'src/app/core/interfaces/responses/food.interface';

export const FOOD_MOCK: Array<Food> = [
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
  {
    id: 3,
    image: 'assets/images/food_003.png',
    title: 'Frango frito',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
    price: 30,
  },
];
