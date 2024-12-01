export type User = 'standard' | 'premium' | 'gold' | 'free';
export type Product = 'car' | 'toy' | 'food';

export interface IUsersDiscount {
  user: string;
  discount: number;
}

export interface IProductsDiscount {
  product: string;
  user: string;
  discount: number;
}
