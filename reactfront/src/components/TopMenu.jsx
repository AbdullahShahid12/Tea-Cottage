import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Toolbar,
  AppBar,
  Typography,
  Box,
  IconButton,
  FormControl,
} from "@material-ui/core";
import userService from "../services/UserService";
import { Nav, Navbar, Form } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
  },
  AppBar: {
    color: "#3f2419",
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState();
  const handleChange = (category) => {
    console.log(category);

    //window.location.href = "/products/" + category;
  };
  return (
    <div>
      <AppBar position="static" style={{ background: "#3f2419" }}>
        <Toolbar>
          <Typography variant="h6">
            <Button href="/" className={classes.link}>
              Home
            </Button>
          </Typography>
          <Typography variant="h6">
            <Button href="/products" className={classes.link}>
              Products
            </Button>
          </Typography>
          <Typography variant="h6">
            <Button href="/products/1/Savory" className={classes.link}>
              Savory
            </Button>
          </Typography>
          <Typography variant="h6">
            <Button href="/products/1/Sweet" className={classes.link}>
              Sweet
            </Button>
          </Typography>
          {!userService.isLoggedIn() ? (
            <>
              <Typography variant="h6" style={{ marginLeft: "auto" }}>
                <Button href="/login" className={classes.link}>
                  Login
                </Button>
              </Typography>
              <Typography variant="h6">
                <Button
                  href="/register"
                  className={classes.link}
                  style={{ right: "1px" }}
                >
                  Register
                </Button>
              </Typography>
            </>
          ) : (
            <Button
              variant="contained"
              color="#e5c0a5"
              style={{ marginLeft: "auto" }}
              onClick={(e) => {
                userService.logout();
                window.location.reload();
              }}
            >
              Logout {userService.getLoggedInUser().name}
            </Button>
          )}
          {!userService.isLoggedIn() ? (
            <h1></h1>
          ) : (
            <Button href="/products/cart" className={classes.link}>
              Cart
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Typography
        variant="h3"
        style={{ color: "#3f2419", textAlign: "center" }}
      >
        Tea Cottage
      </Typography>
      <>
        <Navbar bg="dark" variant="dark" style={{ background: "#3f2419" }}>
          <Navbar.Brand href="/">Tea Cottage</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/products/1/Sweet">Sweet</Nav.Link>
            <Nav.Link href="/products/1/Savory">Savory</Nav.Link>
          </Nav>
          {!userService.isLoggedIn() ? (
            <>
              <Button variant="outline-light" href="/login">
                Login
              </Button>
              <Button variant="outline-light" href="/register">
                Register
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline-light"
                onClick={(e) => {
                  userService.logout();
                  window.location.reload();
                }}
              >
                Logout
              </Button>
              <Button variant="outline-light" href="/products/cart">
                Cart
              </Button>
            </>
          )}
        </Navbar>
      </>
    </div>
  );
};

export default TopMenu;
