import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import Navbar from "./components/Navbar";
import PurchaseItem from "./components/PurchaseItem";
import NotFoundPage from "./components/NotFoundPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
/* Temporarily using React-router for routing*/
/* To be replace with Axios for making API calls to server*/
  return (
    <Router>
      <Navbar />
    <div>
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        
        <Route path="/product/:id" component={PurchaseItem} />
        <Route path="*" component={NotFoundPage} />
  
        
      </Switch>
    </div>
  
  </Router>
  );
}

export default App;