import React from "react";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products/Products";
import ContactUs from "./components/products/contactus";
import "bootstrap/dist/css/bootstrap.min.css";

import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Cart from "./components/products/Cart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewProduct from "./components/products/ViewProduct";

function App() {
  return (
    <Router>
      <div>
        ;
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/products/update/:id" component={UpdateProduct} />
            <Route path="/products/view/:id" component={ViewProduct} />

            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/cart" component={Cart} />
            <Route
              path="/products/:page?/:category?/:subCategory?"
              component={Products}
            />

            <Route path="/" exact component={LandingPage} />
            <Redirect to="notfound" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
