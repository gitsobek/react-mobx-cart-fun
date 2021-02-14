import { observable, action, makeObservable } from "mobx";
import { Order } from "../models/Order";
import { ProductsStore } from "./ProductsStore";

export class OrdersStore {
  @observable orders: Order[] = [];

  constructor(private productsStore: ProductsStore) {
    makeObservable(this);
  }

  @action
  addOrder = (drinkName: string, burgerName: string) => {
    const drink = this.productsStore.drinks.find((d) => d.name === drinkName);
    const burger = this.productsStore.burgers.find(
      (b) => b.name === burgerName
    );

    if (!drink || !burger) {
      return;
    }

    const totalPrice = drink?.price + burger?.price;
    this.orders.push({
      drink,
      burger,
      totalPrice,
    });
  };
}
