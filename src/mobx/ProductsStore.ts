import { observable, action, runInAction, makeObservable } from "mobx";
import { Product } from "../models/Product";
import { getDrinks, getBurgers } from "../api";

export class ProductsStore {
  @observable drinks: Product[] = [];
  @observable burgers: Product[] = [];
  @observable isLoading: boolean = true;

  constructor() {
    makeObservable(this);
  }

  @action
  fetchProducts = async () => {
    const drinks = await getDrinks();
    const burgers = await getBurgers();

    runInAction(() => {
      this.drinks = drinks;
      this.burgers = burgers;
      this.isLoading = false;
    });
  };
}
