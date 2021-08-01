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
  return (
    

    <Router>
      <Navbar />

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

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