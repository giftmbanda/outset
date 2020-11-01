import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"; // Import here your file style
import NavBar from "./components/NavBar";
import Checkout from "./pages/Checkout";
import ForgotPassword from "./pages/ForgotPassword";
import ItemCard from "./pages/ItemCard";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
//import PrivatePage from './utils/PrivateRoute';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemCard} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

export default App;
