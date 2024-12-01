import { IProductsDiscount, IUsersDiscount, Product, User } from './types';

export class AccountServise {
  getUsersDiscount(usersStore: IUsersDiscount[]) {
    return usersStore;
  }
  getProductsDiscount(discountsStore: IProductsDiscount[]) {
    return discountsStore;
  }
  getTotalDiscount(discountsStore: IProductsDiscount[], usersStore: IUsersDiscount[], user: User, product: Product) {
    const userDiscount = usersStore.find((users) => users.user === user).discount;
    const productDiscountForUser = discountsStore.find(
      (products) => products.product === product && products.user === user
    ).discount;

    return userDiscount + productDiscountForUser;
  }
  setUserDiscount(usersStore: IUsersDiscount[], user: User, discount: number) {
    const userInfo = usersStore.find((elems) => elems.user === user);
    userInfo.discount = discount;
    return userInfo;
  }
  setProductDiscountForUser(productsStore: IProductsDiscount[], product: Product, user: User, discount: number) {
    const productInfo = productsStore.find((elems) => elems.product === product && elems.user === user);
    productInfo.discount = discount;
    return productInfo;
  }
}
