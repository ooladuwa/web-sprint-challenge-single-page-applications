import React from "react";
import { Link, Route } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";

function Header() {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/Form">Order Now</Link>
      <h1>Mama Mia's Pizzeria</h1>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Form">
        <Form />
      </Route>
    </div>
  );
}

export default Header;
