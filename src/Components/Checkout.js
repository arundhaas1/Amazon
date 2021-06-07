import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'

function Checkout() {
    return (
        <div className="checkout">
            <div className="left">
                <div className="add">
                    <img alt="" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved.jpg" />
                </div>
                <div>
                    <h2>Your Shopping Basket</h2>
                </div>
            </div>

            <div>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
