import React from "react";
import { Link, Route } from "react-router-dom";
import Pizza from "./Pizza";

function Header() {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/Form">Order Now</Link>
      <h1>Lambda Eats(I'm the header component)</h1>

      <Route exact path="/"></Route>
      <Route path="/Form">
        <Pizza />
      </Route>
    </div>
  );
}

export default Header;
