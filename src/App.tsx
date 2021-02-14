import React from "react";
import "./App.css";
import { OrderForm } from "./mobx/OrderForm";
import { OrdersList } from "./mobx/OrdersList";

function App() {
  return (
    <>
      <OrdersList />
      <OrderForm />
    </>
  );
}

export default App;
