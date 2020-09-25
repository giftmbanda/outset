import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import "./App.css"; // Import here your file style
import ItemCard from "./pages/ItemCard";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import NavBar from "./components/NavBar";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          {" "}
          <ItemCard />
        </Route>
        <Route exact path="/login">
          {" "}
          <SignIn />
        </Route>
        <Route exact path="/register">
          {" "}
          <SignUp />
        </Route>
        <Route exact path="/forgotpassword">
          {" "}
          <ForgotPassword />
        </Route>
        <Route exact path="/resetpassword">
          {" "}
          <ResetPassword />
        </Route>
        <Route exact path="/checkout">
          {" "}
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
