import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CardGroup, Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div>
      <img src={require("./banner.jpg")} alt="Logo" width="100%" />
      <br />
      <CardGroup>
        <Card style={{ padding: 15 }}>
          <Card.Img
            variant="top"
            style={{ width: "auto", height: 290 }}
            src={require("./frosted.jpg")}
          />

          <a href={"/products/" + 1 + "/Sweet/FrostedCakes"}>
            <Card.Body style={{ color: "#3f2419" }}>
              <Card.Title>Frosted Cakes</Card.Title>
              <Card.Text>
                Find the best Frosted cakes in town. Made from Hygenic products.
              </Card.Text>
            </Card.Body>
          </a>
        </Card>

        <Card style={{ padding: 15 }}>
          <Card.Img
            variant="top"
            style={{ width: "auto", height: 290 }}
            src={require("./cheese.jpg")}
          />
          <a href={"/products/" + 1 + "/Sweet/CheeseCakes"}>
            <Card.Body style={{ color: "#3f2419" }}>
              <Card.Title>Cheese Cakes</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
        <Card style={{ padding: 15 }}>
          <Card.Img
            variant="top"
            style={{ width: "auto", height: 290 }}
            src={require("./desserts.jpg")}
          />
          <a href={"/products/" + 1 + "/Sweet/Desserts"}>
            <Card.Body style={{ color: "#3f2419" }}>
              <Card.Title>Desserts</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card style={{ padding: 15 }}>
          <Card.Img
            variant="top"
            style={{ width: "auto", height: 290 }}
            src={require("./salads.jpeg")}
          />

          <a href={"/products/" + 1 + "/Savory/Salads"}>
            <Card.Body style={{ color: "#3f2419" }}>
              <Card.Title>Salads</Card.Title>
              <Card.Text>
                Find the best Frosted cakes in town. Made from Hygenic products.
              </Card.Text>
            </Card.Body>
          </a>
        </Card>

        <Card style={{ padding: 15 }}>
          <Card.Img
            variant="top"
            style={{ width: "auto", height: 290 }}
            src={require("./sandwiches.jpg")}
          />
          <a href={"/products/" + 1 + "/Savory/Sandwiches"}>
            <Card.Body style={{ color: "#3f2419" }}>
              <Card.Title>Sandwiches</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
        <Card style={{ padding: 15 }}>
          <Card.Img
            variant="top"
            style={{ width: "auto", height: 290 }}
            src={require("./bread.jpg")}
          />
          <a href={"/products/" + 1 + "/Savory/BreadCorner"}>
            <Card.Body style={{ color: "#3f2419" }}>
              <Card.Title>Bread Corner</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </CardGroup>
    </div>
  );
};

export default LandingPage;
