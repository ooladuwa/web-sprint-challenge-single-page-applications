import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import * as yup from "yup";
import Form from "./Form";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />

      <Form />
    </div>
  );
};
export default App;
