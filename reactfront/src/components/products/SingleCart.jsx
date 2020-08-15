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
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {Cart.name}
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
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default SingleCart;
