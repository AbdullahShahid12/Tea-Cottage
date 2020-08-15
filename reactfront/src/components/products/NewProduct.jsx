import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState();
  const [description, setDescription] = React.useState();
  const [category, setCategory] = React.useState();
  const [subCategory, setSubCategory] = React.useState();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add new Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></TextField>
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></TextField>
        <TextField
          label="price"
          fullWidth
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></TextField>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            float: "right",
            display: "flex",
            width: "100%",
            height: "30px",
            color: "#3f2419",
            backgroundColor: "#f7d2b7",
          }}
        >
          <option value="">Select Category</option>
          <option value="Sweet">Sweet</option>
          <option value="Savory">Savory</option>
        </select>
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          style={{
            float: "right",
            display: "flex",
            width: "100%",
            height: "30px",
            color: "#3f2419",
            backgroundColor: "#f7d2b7",
          }}
        >
          <option value="select">Select Sub-Category</option>
          <option value="Desserts">Desserts</option>
          <option value="ClassicTeaCakes">Classic Tea Cakes</option>
          <option value="FrostedCakes">Frosted Cakes</option>
          <option value="CheeseCakes">Cheese Cakes</option>
          <option value="BreadCorner">Bread Corner</option>
          <option value="Chaats">Chaats</option>
          <option value="Salads">Salads</option>
          <option value="Savory">Savory</option>
          <option value="Sandwiches">Sandwiches</option>
        </select>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ name, price, description, category, subCategory })
              .then((data) => {
                console.log(data);
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add new
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
