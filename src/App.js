import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import "./App.css"; // Import here your file style
import ItemCard from "./pages/ItemCard";
import Checkout from "./pages/Checkout";
import SignInSide from "./pages/SignInSide";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">{" "}<SignUp /></Route>
        <Route exact path="/login"><SignInSide /></Route>
        <Route exact path="/home">{" "}<NavBar /><ItemCard /></Route>
        <Route exact path="/checkout">{" "}<Checkout /></Route>
      </Switch>
    </Router>
  );
};

export default App;
