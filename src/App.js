import React from "react";
import './App.css';
import Header from "./Components/Header.js"
import "tachyons"
import Home from "./Components/Home.js"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Components/Checkout'
import Login from './Components/Login'

function App() {
  return (
      <Router>
          <div className="app">

            <Switch>
                <Route path="/login">
                  <Login />
                </Route>

                <Route path="/checkout">
                  <Header />
                  <Checkout />
                </Route>

                <Route path="">
                  <Header />
                  <Home />
                </Route>
            </Switch>
          </div>
      </Router>
  );
}

export default App;
