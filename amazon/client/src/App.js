import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./Home"
import About from "./About"
import Navbar from "./components/Navbar";

function App() {
/* Temporarily using React-router for routing*/
/* To be replace with Axios for making API calls to server*/
  return (
    <Router>
      <Navbar />
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  
  </Router>
  );
}

export default App;