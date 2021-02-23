import React from "react";
import { useSelector } from "react-redux";
import AddOrRemove from "./AddOrRemove";
import { Link } from "react-router-dom";

function Products() {
  const products = useSelector((state) => state.items);

  return (
    <div className="container">
      <div className="col ">
        <h4 className="row justify-content-center">Product List</h4>
        <div className="row justify-content-center">
          <ul style={{ width: "30rem" }}>
            {Object.keys(products).map((p) => (
              <div className="card align-items-center m-3 p-3" key={p}>
                <h3 className="card-title">
                  <Link to={`/products/${p}`}>{products[p].name}</Link>
                </h3>

                <AddOrRemove id={p} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
