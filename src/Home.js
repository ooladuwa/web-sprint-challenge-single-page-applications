import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

function Home() {
  return (
    <div>
      <h2>This is my HOME PAGE</h2>
      <Link to="/Form">
        <button onClick={(evt) => evt.preventDefault}>Order Now!</button>
      </Link>
    </div>
  );
}

export default Home;
