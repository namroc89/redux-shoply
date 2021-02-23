import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

function AddOrRemove({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  const remove = () => dispatch(removeFromCart(id));
  const cart = useSelector((st) => st.cart);

  return (
    <div>
      <button className="btn-success mr-5" onClick={add}>
        add
      </button>

      <span>Amount: {cart[id] ? cart[id] : 0}</span>

      <button className="btn-danger ml-5" onClick={remove}>
        remove
      </button>
    </div>
  );
}
export default AddOrRemove;
