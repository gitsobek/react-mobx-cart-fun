import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStores } from "./StoresProvider";
import { observer } from "mobx-react";
import { Product } from "../models/Product";

export const OrderForm = observer(() => {
  const { productsStore, ordersStore } = useStores();

  const { register, handleSubmit } = useForm();

  const { fetchProducts } = productsStore;
  const { isLoading, drinks, burgers } = productsStore;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onSubmit = handleSubmit((data) => {
    ordersStore.addOrder(data.drink, data.burger);
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Make an order</legend>
        <label htmlFor="drink">Drink</label>
        <select ref={register} id="drink" name="drink">
          {drinks.map((drink: Product, idx: number) => (
            <option key={idx} value={drink.name}>
              {drink.displayName} - ${drink.price}
            </option>
          ))}
        </select>
        <label htmlFor="burger">Burger</label>
        <select ref={register} id="burger" name="burger">
          {burgers.map((burger: Product, idx: number) => (
            <option key={idx} value={burger.name}>
              {burger.displayName} - ${burger.price}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </fieldset>
    </form>
  );
});
