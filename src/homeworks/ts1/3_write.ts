/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 * */

// решил использовать пакет faker для генерации случайных значений
import { faker } from '@faker-js/faker';

let idCategoryCount = 1;
let idProductCount = 1;
let idCostCount = 1;
let idProfitCount = 1;

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 * */

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

/*
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 * */

export type Operation = Cost | Profit;

/*
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 * */

export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

/*
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

export const createRandomProduct = (createdAt: string): Product => {
  const product: Product = {
    id: `P-${idProductCount}`,
    name: faker.food.dish(),
    photo: faker.image.url(),
    desc: faker.food.description(),
    createdAt: createdAt,
    oldPrice: faker.number.int({ min: 100, max: 1000 }),
    price: faker.number.int({ min: 100, max: 1000 }),
    category: { id: `C-${idCategoryCount}`, name: faker.food.ethnicCategory() },
  };
  idCategoryCount += 1;
  idProductCount += 1;
  return product;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const randomTypeOperation = Boolean(faker.number.int({ min: 0, max: 1 }));
  const operation: Operation = {
    id: randomTypeOperation ? `OC-${idCostCount}` : `OP-${idProfitCount}`,
    name: randomTypeOperation ? 'Purchase' : 'Sale',
    createdAt: createdAt,
    desc: faker.food.description(),
    amount: faker.number.int({ min: 1, max: 10 }),
    category: { id: `C-${idCategoryCount}`, name: faker.food.ethnicCategory() },
    type: randomTypeOperation ? 'Cost' : 'Profit',
  };
  if (randomTypeOperation) {
    idCostCount += 1;
  } else {
    idProfitCount += 1;
  }
  return operation;
};
