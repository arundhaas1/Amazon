import React from 'react'
import './Subtotal.css'

function Subtotal() {
    return (
        <div className="subtotal">
            <div className="total">
            <p>Subtotal (0 items):
                <strong className="count">  0</strong>
            </p> 
            </div>

            <p className="gift ">
                <input className="box " type="checkbox" />
                <span className="text">This order contains a gift</span>
            </p>
            
            <div className="proceed">
                <button className="proc">
                    <span className="commit">
                    Proceed to Checkout
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Subtotal
