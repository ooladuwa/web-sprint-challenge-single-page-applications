import React from "react";
import { Link, Route } from "react-router-dom";
import Form from "./Form";

function Home() {
  return (
    <div className="link">
      <Link to="/Form">
        <button onClick={(evt) => evt.preventDefault}>Order Now!</button>
      </Link>
      <Route path="/Form"></Route>
    </div>
  );
}

export default Home;
