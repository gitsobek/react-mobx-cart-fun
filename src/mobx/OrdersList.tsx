import React from "react";
import { useStores } from "./StoresProvider";
import { observer } from "mobx-react-lite";
import { Order } from "../models/Order";

export const OrdersList = observer(() => {
  const { ordersStore } = useStores();

  const { orders } = ordersStore;

  if (!orders.length) {
    return <p>No orders</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Drink</th>
          <th>Burger</th>
          <th>Total price</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order: Order, idx: number) => (
          <tr key={idx}>
            <td>{order.drink.displayName}</td>
            <td>{order.burger.displayName}</td>
            <td>${order.totalPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
