import { AccountServise } from './accountService';
import { IProductsDiscount, IUsersDiscount } from './types';

const accountServise = new AccountServise();

const usersDiscount: IUsersDiscount[] = [
  { user: 'free', discount: 5 },
  { user: 'standard', discount: 1 },
  { user: 'premium', discount: 15 },
  { user: 'gold', discount: 20 },
];

const productsDiscount: IProductsDiscount[] = [
  { product: 'car', user: 'free', discount: null },
  { product: 'car', user: 'standard', discount: 10 },
  { product: 'car', user: 'premium', discount: 15 },
  { product: 'car', user: 'gold', discount: 20 },
  { product: 'toy', user: 'free', discount: 3 },
  { product: 'toy', user: 'standard', discount: 7 },
  { product: 'toy', user: 'premium', discount: null },
  { product: 'toy', user: 'gold', discount: 17 },
  { product: 'food', user: 'free', discount: 7 },
  { product: 'food', user: 'standard', discount: 13 },
  { product: 'food', user: 'premium', discount: 19 },
  { product: 'food', user: 'gold', discount: 26 },
];

describe('get discount for user', () => {
  test('get total discount for gold user', () => {
    expect(accountServise.getTotalDiscount(productsDiscount, usersDiscount, 'gold', 'car')).toBe(40);
  }),
    test('get total discount for free user with null product discount', () => {
      expect(accountServise.getTotalDiscount(productsDiscount, usersDiscount, 'free', 'car')).toBe(5);
    }),
    test('get info about users', () => {
      expect(accountServise.getUsersDiscount(usersDiscount)).toBe(usersDiscount);
    }),
    test('set discount for free user', () => {
      expect(accountServise.setUserDiscount(usersDiscount, 'free', 15.4)).toBe(
        usersDiscount.find((e) => e.user === 'free')
      );
    }),
    test('set discount to car for premium user', () => {
      expect(accountServise.setProductDiscountForUser(productsDiscount, 'car', 'premium', null)).toBe(
        productsDiscount.find((e) => e.product === 'car' && e.user === 'premium')
      );
    }),
    test('calc total discount for changed product discount', () => {
      expect(accountServise.getTotalDiscount(productsDiscount, usersDiscount, 'premium', 'car')).toBe(15);
    });
});
