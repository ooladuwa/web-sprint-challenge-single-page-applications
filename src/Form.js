import React, { useState } from "react";
import * as yup from "yup";
import Schema from "./schema";
import axios from "axios";
import Pizza from "./Pizza";
import { Link, Route } from "react-router-dom";

// Initial Values//
const initialFormValues = {
  username: "",
  email: "",
  phone: "",
  size: "",
  sauce: "",
  textarea: "",
  pepperoni: false,
  sausage: false,
  dicedTomotoes: false,
  blackOlives: false,
  roastedGarlic: false,
  threeCheese: false,
  extraCheese: false,
  onions: false,
  greenPepper: false,
  pineapple: false,
};

const initialFormErrors = {
  username: "",
  email: "",
};
export default function Form() {
  // Initialize state
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [newOrder, setNewOrder] = useState(initialFormValues);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/user", newOrder)
      .then((res) => {
        console.log(res.data);
        // setNewOrder(newOrder);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    postNewOrder(formValues);
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };
  const inputChange = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form">
        <div>
          <h2>Build Your Own Pizza</h2>
          <div>
            <label>
              Name:
              <input
                value={formValues.username}
                onChange={onChange}
                name="username"
                type="text"
              />
            </label>
          </div>
          <div>
            <label>
              email:
              <input
                value={formValues.email}
                onChange={onChange}
                name="email"
                type="text"
              />
            </label>
          </div>
          <div>
            <label>
              Phone
              <input
                value={formValues.phone}
                onChange={onChange}
                name="phone"
                type="integer"
              />
            </label>
          </div>
          <label>
            <select
              type="dropdown"
              name="size"
              value={formValues.size}
              onChange={onChange}
            >
              <option>-----Choose Size-----</option>
              <option value="xl">Extra Large</option>
              <option value="lg">Large</option>
              <option value="med">Medium</option>
              <option value="small">Small</option>
            </select>
          </label>
          <h2>Choice of sauce:</h2>
          <h4>**required***</h4>
          <label>
            Red Sauce
            <input
              type="radio"
              name="sauce"
              value="red"
              checked={formValues.sauce === "red"}
              onChange={onChange}
            />
          </label>
          <label>
            Garlic Ranch
            <input
              type="radio"
              name="sauce"
              value="garlic"
              checked={formValues.sauce === "garlic"}
              onChange={onChange}
            />
          </label>
          <label>
            BBQ
            <input
              type="radio"
              name="sauce"
              value="bbq"
              checked={formValues.sauce === "bbq"}
              onChange={onChange}
            />
          </label>
          <label>
            Spinach Alfredo
            <input
              type="radio"
              name="sauce"
              value="alfredo"
              checked={formValues.sauce === "alfredo"}
              onChange={onChange}
            />
          </label>
          <h2>Add Toppings:</h2>
          <h4>**Choose up to six**</h4>
          <div className="checks">
            <label>
              Pepperoni
              <input
                type="checkbox"
                name="pepperoni"
                checked={formValues.pepperoni}
                onChange={onChange}
              />
            </label>
            <label>
              Sausage
              <input
                type="checkbox"
                name="sausage"
                checked={formValues.sausage}
                onChange={onChange}
              />
            </label>
            <label>
              Diced Tomatoes
              <input
                type="checkbox"
                name="dicedTomatoes"
                checked={formValues.dicedTomatoes}
                onChange={onChange}
              />
            </label>
            <label>
              Black Olives
              <input
                type="checkbox"
                name="blackOlives"
                checked={formValues.blackOlives}
                onChange={onChange}
              />
            </label>
            <label>
              Roasted Garlic
              <input
                type="checkbox"
                name="roastedGarlic"
                checked={formValues.roastedGarlic}
                onChange={onChange}
              />
            </label>
            <label>
              Three Cheese
              <input
                type="checkbox"
                name="extraCheese"
                checked={formValues.extraCheese}
                onChange={onChange}
              />
            </label>
            <label>
              Extra Cheese
              <input
                type="checkbox"
                name="threeCheese"
                checked={formValues.threeCheese}
                onChange={onChange}
              />
            </label>
            <label>
              Onions
              <input
                type="checkbox"
                name="onions"
                checked={formValues.onions}
                onChange={onChange}
              />
            </label>
            <label>
              Green Pepper
              <input
                type="checkbox"
                name="greenPepper"
                checked={formValues.greenPepper}
                onChange={onChange}
              />
            </label>
            <label>
              Pineapple
              <input
                type="checkbox"
                name="pineapple"
                checked={formValues.pineapple}
                onChange={onChange}
              />
            </label>
          </div>
          <h4>Special Instructions:</h4>
          <textarea
            name="textarea"
            value={formValues.textarea}
            onChange={onChange}
            placeholder="Special Instructions"
            rows="4"
            cols="50"
          />
          <div className="add-to">
            {/* <Link to="/Pizza"> */}
            <button>Time to Eat!</button>
            {/* </Link> */}
            {/* <Route path="/Pizza"></Route> */}
            <Pizza newOrder={newOrder} />
          </div>
        </div>
      </div>
    </form>
  );
}
