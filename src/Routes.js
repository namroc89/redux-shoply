import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import Cart from "./Cart";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetails />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
