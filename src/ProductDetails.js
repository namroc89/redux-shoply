import React from "react";
import { useSelector } from "react-redux";
import AddOrRemove from "./AddOrRemove";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const product = useSelector((st) => ({ ...st.items[id] }));

  return (
    <div className="container d-sm-flex justify-content-center ">
      <div className="card align-items-center p-3" style={{ width: "20rem" }}>
        <img
          className="card-img-top"
          src={product.image_url}
          alt={product.name}
        />
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <h4>Price: ${product.price}</h4>
        <AddOrRemove id={id} />
      </div>
    </div>
  );
}

export default ProductDetails;
