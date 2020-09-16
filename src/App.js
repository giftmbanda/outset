import React from "react";
import "./App.css"; //Import here your file style
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import ItemCard from "./components/ItemCard";
import SignInSide from "./components/SignInSide";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <React.Fragment>
      <SignUp />
    </React.Fragment>
  );
};

export default App;
