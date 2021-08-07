import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./Home"
import Checkout from "./Checkout"
import Navbar from "./components/Navbar";
import PurchaseItem from "./components/PurchaseItem"

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
        
        <Route path="/product/:id" component={PurchaseItem} />
     
  
        
      </Switch>
    </div>
  
  </Router>
  );
}

export default App;