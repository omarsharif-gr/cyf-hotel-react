import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Restaurant from "./Restaurant";
const Order = props => {
  function orderOne() {
    return setOrders(orders + 1);
  }
  const pizzas = 0;
  const [orders, setOrders] = useState(0);
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton order={orderOne} />
    </li>
  );
};
export default Order;
