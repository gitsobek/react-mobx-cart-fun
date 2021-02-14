import { Product } from './Product';

export interface Order {
    drink: Product,
    burger: Product,
    totalPrice: number
}