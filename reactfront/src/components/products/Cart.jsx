import React from "react";
import productService from "../../services/ProductsService";
import { Grid } from "@material-ui/core";
import SingleCart from "./SingleCart";
const Cart = (props) => {
  const [carts, setCarts] = React.useState([]);
  const [bill, setBill] = React.useState(0);
  const id = props.match.params.id;
  const getData = () => {
    productService
      .addToCart(-10)
      .then((data) => {
        setCarts(data.cart);
        setBill(data.bill);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {carts.length == 0 ? (
        <p>There are no Products</p>
      ) : (
        <Grid container spacing={3}>
          {carts.map((cart, index) => (
            <SingleCart Key={index} Cart={cart} onDelete={getData} />
          ))}
        </Grid>
      )}
      <br />
      <br />
      <h1>Total bill: {bill}</h1>
    </div>
  );
};

export default Cart;
