import React from "react";
import productService from "../../services/ProductsService";
import { Grid } from "@material-ui/core";
import SingleCart from "./SingleCart";
const Cart = (props) => {
  const [carts, setCarts] = React.useState([]);
  const id = props.match.params.id;
  const getData = () => {
    productService
      .addToCart(-10)
      .then((data) => {
        console.log(data);
        setCarts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);

  return (
    <div>
      {carts.length == 0 ? (
        <p>There are no Products</p>
      ) : (
        <Grid container spacing={3}>
          {carts.map((cart, index) => (
            <SingleCart Key={index} Cart={cart} onDelete={getData} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Cart;
