import React, { useState } from "react";
import axios from "axios";
import productService from "../../services/ProductsService";
import { Typography, Button } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import { render } from "@testing-library/react";

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
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-120"
            src={require("../cup.jpg")}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../cup.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../cup.jpg")}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Typography>
        {" "}
        {product.name}
        {product.description}
        {product.price}
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
      </Typography>
    </div>
  );
};

export default ViewProduct;
