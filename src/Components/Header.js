import React,{useContext} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom'
import {StateContext} from './StateProvider'

const Header=()=> {
    const [{basket},dispatch]=useContext(StateContext)
    return (
        <div className="header">
            <div>
                <Link to="/">
                    <img  className="logo grow" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />
                </Link>
            </div>
            <LocationOnIcon className="location" />
            <div className="address">
                <span className="add1">Hello select</span>
                <span className="add2">Your address</span>
            </div>
            <div>
               <input className="searchbox" />
               {/* searchLogo */}
            </div>
            <SearchIcon className="sicon grow"></SearchIcon>

            <div className="icons">
                <div className="icon1">
                    <span className="opt1">Hello Quest</span>
                    <span className="opt2">Sign in</span>
                </div>
                <div className="icon2">
                    <span className="opt3">Returns</span>
                    <span className="opt4">&Orders</span>
                </div>
                <div className="icon3">
                    <span className="opt5">Your</span>
                    <span className="opt6">Prime</span>
                </div>
            </div>
            <div className="baskets">
              <Link to="/checkout">
                  <ShoppingBasketIcon className="basket"/>
              </Link>
            <span className="counter">{basket.length}</span>
            </div>
        </div>
    )
}

export default Header
