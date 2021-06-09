import React,{useContext,useEffect} from "react";
import './App.css';
import Header from "./Components/Header.js"
import "tachyons"
import Home from "./Components/Home.js"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Components/Checkout'
import Login from './Components/Login'
import {StateContext} from './Components/StateProvider.js'
import { auth } from "./Components/firebase";
import Payment from "./Components/Payment";

function App() {

  const [{},dispatch]=useContext(StateContext)

useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      // console.log(authUser)
      if (authUser) {
        dispatch({
          type :'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type :'SET_USER',
          user: authUser
        })
      }
    })
}, [])

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

                <Route path="/Payment">
                  <Header />
                  <Payment />
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
