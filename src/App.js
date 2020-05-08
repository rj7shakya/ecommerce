import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
