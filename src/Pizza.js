import React from "react";

function Pizza(props) {
  const { newOrder } = props;
  return (
    <div>
      <h2>Order Success Page</h2>
      <p>Name: {newOrder.name}</p>
      <p>Email: {newOrder.email}</p>
    </div>
  );
}

export default Pizza;

// https://reqres.in/
