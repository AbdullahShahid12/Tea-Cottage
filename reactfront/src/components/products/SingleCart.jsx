import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup, Row, CardColumns } from "react-bootstrap";
import productService from "../../services/ProductsService";
import { Button } from "@material-ui/core";
const SingleCart = ({ Cart, onDelete }) => {
  const [expanded, setExpanded] = React.useState(false);
  console.log(Cart);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require("../cup.jpg")} />
        <Card.Body style={{ color: "#3f2419" }}>
          <Card.Title>{Cart.name}</Card.Title>
          <Card.Text>{Cart.description}</Card.Text>
          <Card.Title>Rs. {Cart.price}</Card.Title>

          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                productService
                  .removeFromCart(Cart._id)

                  .then((data) => {
                    console.log("hello");
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCart;
