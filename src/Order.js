import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Restaurant from "./Restaurant";
const Order = () => {
  function orderOne() {
    return setOrders(orders + 1);
  }
  const pizzas = 0;
  const [orders, setOrders] = useState(0);
  return (
    <li>
      Pizzas: {orders} <RestaurantButton order={orderOne} />
    </li>
  );
};
export default Order;
