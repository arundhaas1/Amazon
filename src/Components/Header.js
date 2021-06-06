import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Header=()=> {
    return (
        <div className="header">
            <div>
              <img  className="logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />
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
            <SearchIcon className="sicon"></SearchIcon>

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
            <ShoppingBasketIcon className="basket"/>
            <span className="counter">0</span>
            </div>
        </div>
    )
}

export default Header
