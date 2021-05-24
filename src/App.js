import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Nav from "./Nav";
import Shop from "./Shop";
import Autocomp from "./Autocomp";
import React, { useState, useEffect } from "react";
import Usecase from "./Usecase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/A" exact component={Autocomp} />
          </Switch>
        </div>
      </Router>
      <Usecase />
    </>
  );
}

const Home = (e) => {
  const [increase, setincrease] = useState(0);

  return (
    <div>
      <h1>e.Home page</h1>
      <form>
        <button
          type="submit"
          class="bt"
          onClick={(e) => {
            e.preventDefault();
            setincrease(() => increase + 1);
          }}
        >
          Create
        </button>
        <p>{increase}</p>
      </form>
    </div>
  );
};

export default App;
