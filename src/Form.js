import React from "react";

export default function Form() {
  return (
    <div>
      <h2>Build Your Own Pizza</h2>
      <label>
        <select
          type="dropdown"
          name="sizes"
          // value={}
          // onChange={}
        >
          <option>-----Choose Size-----</option>
          <option value="xl">Extra Large</option>
          <option value="lg">Large</option>
          <option value="med">Medium</option>
          <option value="small">Small</option>
        </select>
      </label>

      <h2>Choice of sauce:</h2>
      <h5>**required***</h5>

      <label>
        Red Sauce
        <input
          type="radio"
          name="sauce"
          value="red"
          // checked={values.civil === "single"}
          // onChange={onChange}
        />
      </label>

      <label>
        Garlic Ranch
        <input
          type="radio"
          name="sauce"
          value="garlic"
          // checked={values.civil === "single"}
          // onChange={onChange}
        />
      </label>

      <label>
        BBQ
        <input
          type="radio"
          name="sauce"
          value="bbq"
          // checked={values.civil === "single"}
          // onChange={onChange}
        />
      </label>

      <label>
        Spinach Alfredo
        <input
          type="radio"
          name="sauce"
          value="alfredo"
          // checked={values.civil === "single"}
          // onChange={onChange}
        />
      </label>

      <h2>Add Toppings:</h2>
      <h5>**Choose up to six**</h5>

      <label>
        Pepperoni
        <input
          type="checkbox"
          name="pepperoni"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Sausage
        <input
          type="checkbox"
          name="sausage"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Diced Tomatoes
        <input
          type="checkbox"
          name="diced_tomatoes"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Black Olives
        <input
          type="checkbox"
          name="black_olives"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Roasted Garlic
        <input
          type="checkbox"
          name="roasted_garlic"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Three Cheese
        <input
          type="checkbox"
          name="extra_cheese"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Extra Cheese
        <input
          type="checkbox"
          name="extra_cheese"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Onions
        <input
          type="checkbox"
          name="onions"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Green Pepper
        <input
          type="checkbox"
          name="green_pepper"
          // checked=""
          // onChange={}
        />
      </label>

      <label>
        Pineapple
        <input
          type="checkbox"
          name="pineapple"
          // checked=""
          // onChange={}
        />
      </label>

      <h4>Special Instructions:</h4>
      <textarea />
    </div>
  );
}
