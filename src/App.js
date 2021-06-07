import React from "react";
import './App.css';
import Header from "./Components/Header.js"
import "tachyons"
import Home from "./Components/Home.js"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Components/Checkout'

function App() {
  return (
      <Router>
          <div className="app">
            <Header />

            <Switch>
                <Route path="/checkout">
                  <Checkout />
                </Route>

                <Route path="">
                  <Home />
                </Route>
            </Switch>
          </div>
      </Router>
  );
}

export default App;
