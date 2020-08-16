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
import { Nav, Navbar, Form, NavDropdown } from "react-bootstrap";
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
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#3f2419" }}
      >
        <Navbar.Brand href="/">Tea Cottage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/products/1/Sweet">Sweet</Nav.Link>

            <Nav.Link href="/products/1/Savory">Savory</Nav.Link>
          </Nav>
          <Nav>
            {!userService.isLoggedIn() ? (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  onClick={(e) => {
                    userService.logout();
                    window.location.reload();
                  }}
                >
                  Logout
                </Nav.Link>
                <Nav.Link href="/products/cart">Cart</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <></>
    </div>
  );
};

export default TopMenu;
