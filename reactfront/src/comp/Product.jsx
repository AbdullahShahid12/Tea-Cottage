import React from "react";
import "./product.css";
const Product = (props) => {
  var priceClass = props.price <= 600 ? "orange" : "green";

  return (
    <div>
      <h3 style={{ backgroundColor: "aqua" }}>{props.title}</h3>
      <div className={priceClass}>
        <b>Price: </b>
        {props.price}
        <button
          onClick={() => {
            props.onAddToCart(props.title);
          }}
        >
          Add To Card
        </button>
      </div>
      <p>Product Details</p>
      <hr></hr>
    </div>
  );
};

export default Product;
