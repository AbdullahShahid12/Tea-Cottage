import React from "react";
import productService from "../../services/ProductsService";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import userService from "../../services/UserService";
import ViewProduct from "./ViewProduct";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    color: "#3f2419",
  },
  media: {
    height: 190,
  },
});
const SingleProduct = ({ Product, onDelete, history }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <a href={"/products/view/" + Product._id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={require("../cup.jpg")} />
          <Card.Body href={"/products/view/" + Product._id}>
            <Card.Title>{Product.name}</Card.Title>
            <Card.Text>{Product.description}</Card.Text>
            <Card.Title>Rs. {Product.price}</Card.Title>
            {userService.isAdmin() && (
              <>
                <Button
                  variant="primary"
                  href={"/products/update/" + Product._id}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={(e) => {
                    productService
                      .deleteProduct(Product._id)

                      .then((data) => {
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
            )}
          </Card.Body>
        </Card>
      </a>
    </div>
  );
};

export default withRouter(SingleProduct);
