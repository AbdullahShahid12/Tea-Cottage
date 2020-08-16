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
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Nav, Navbar, Form, NavDropdown } from "react-bootstrap";

const Footer = () => {
  const handleChange = (category) => {
    //window.location.href = "/products/" + category;
  };
  return (
    <div>
      {" "}
      <MDBFooter
        style={{ backgroundColor: "#3f2419" }}
        className="font-small pt-4 mt-4"
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 style={{ color: "#ffffff" }}>Tea Cottage</h5>
              <p style={{ color: "#ffffff" }}>
                Bakery based in Lahore providing best taste and quality
              </p>
            </MDBCol>
            <MDBCol md="6" style={{ color: "#ffffff" }}>
              <h5>Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="/products/1/Savory" style={{ color: "#ffffff" }}>
                    Savory
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="/products/1/Sweet" style={{ color: "#ffffff" }}>
                    Sweet
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3"></div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
