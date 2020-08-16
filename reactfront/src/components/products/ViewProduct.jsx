import React, { useState } from "react";
import axios from "axios";
import productService from "../../services/ProductsService";
import { Typography, Button } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import { render } from "@testing-library/react";
import userService from "../../services/UserService";

const ViewProduct = (props) => {
  const [product, setProduct] = React.useState([]);
  const [carts, setCarts] = React.useState([]);
  const id = props.match.params.id;
  const getData = () => {
    productService
      .getSingleProduct(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);

  return (
    <div>
      <Carousel style={{ width: 500, height: "auto" }}>
        <Carousel.Item>
          <img
            src={require("../cup.jpg")}
            alt="First slide"
            style={{ width: "auto", height: 290 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../cup.jpg")}
            alt="First slide"
            style={{ width: "auto", height: 290 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("../cup.jpg")}
            alt="First slide"
            style={{ width: "auto", height: 290 }}
          />
        </Carousel.Item>
      </Carousel>

      <Typography>
        {" "}
        {product.name}
        {product.description}
        {product.price}
        {userService.isLoggedIn() ? (
          <Button
            onClick={(e) => {
              productService
                .addToCart(id)
                .then((data) => {
                  setCarts(data);
                  console.log(data);
                  console.log("This is data");
                  //props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add To Cart
          </Button>
        ) : (
          <Button href="/login">Add To Cart</Button>
        )}
      </Typography>
    </div>
  );
};

export default ViewProduct;
