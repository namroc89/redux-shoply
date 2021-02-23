import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddOrRemove from "./AddOrRemove";

function Cart() {
  const { items, cart } = useSelector((st) => st);

  return (
    <div className="container d-sm-flex justify-content-center ">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th className="text-center">Item name</th>
            <th className="text-center">Item Price</th>
            <th className="text-center">Actions and Qty</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cart).map((id) => (
            <tr key={id}>
              <td className="text-center">
                <Link to={`/products/${id}`}>{items[id].name}</Link>
              </td>
              <td className="text-center">{items[id].price}</td>
              <td className="text-center">
                <AddOrRemove id={id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
