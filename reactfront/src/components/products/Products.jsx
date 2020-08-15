import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "../../services/ProductsService";
import userService from "../../services/UserService";
import Pagination from "@material-ui/lab/Pagination";
import { ListGroup } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  const subCategory = props.match.params.subCategory
    ? props.match.params.subCategory
    : "no";
  const category = props.match.params.category;
  console.log(subCategory);
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(9);

  const getData = () => {
    productService
      .getProducts(page, perPage, category, subCategory)
      .then((data) => {
        setProducts(data.products);

        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, [page, perPage]);
  const handleNewProductClick = () => {
    props.history.push("/products/new");
  };
  return (
    <div>
      {category == "Savory" ? (
        <ListGroup horizontal>
          <a href={"/products/" + page + "/" + category + "/Salads"}>
            <ListGroup.Item>Salads</ListGroup.Item>
          </a>
          <a href={"/products/" + page + "/" + category + "/BreadCorner"}>
            <ListGroup.Item>Bread Corner</ListGroup.Item>
          </a>

          <a href={"/products/" + page + "/" + category + "/Sandwiches"}>
            <ListGroup.Item>Sandwiches</ListGroup.Item>
          </a>
          <a href={"/products/" + page + "/" + category + "/Chaats"}>
            <ListGroup.Item>Chaats</ListGroup.Item>
          </a>
        </ListGroup>
      ) : (
        <ListGroup horizontal>
          <a href={"/products/" + page + "/" + category + "/Desserts"}>
            <ListGroup.Item>Desserts</ListGroup.Item>
          </a>
          <a href={"/products/" + page + "/" + category + "/BreadCorner"}>
            <ListGroup.Item>Bread Corner</ListGroup.Item>
          </a>
          <a href={"/products/" + page + "/" + category + "/ClassicTeaCakes"}>
            <ListGroup.Item>Classic Tea Cakes</ListGroup.Item>
          </a>
          <a href={"/products/" + page + "/" + category + "/CheeseCakes"}>
            <ListGroup.Item>Cheese Cakes</ListGroup.Item>
          </a>
          <a href={"/products/" + page + "/" + category + "/Chaats"}>
            <ListGroup.Item>Chaats</ListGroup.Item>
          </a>
        </ListGroup>
      )}
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{
          float: "right",
          display: "flex",
          width: "100px",
          height: "30px",
          color: "#3f2419",
          backgroundColor: "#f7d2b7",
        }}
      >
        <option value="9">9</option>
        <option value="18">18</option>
        <option value="27">27</option>
        <option value="1">1</option>
      </select>
      {userService.isAdmin() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}

      {products.length == 0 ? (
        <p>There are no Products</p>
      ) : (
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <SingleProduct Key={index} Product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "10vh" }}
      >
        <Grid item xs={12}>
          <Pagination
            count={Math.ceil(total / perPage)}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => {
              props.history.push("/products/" + value + "/" + category);
            }}
          />{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
