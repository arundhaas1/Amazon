import React from 'react'
import './CheckProduct.css'

function CheckProduct({id,info,rate,star,pic}) {
    return (
        <div className="checkProduct">
            <div className="checkPic">
                <img alt="" src={pic}  height="250" width="400"></img>
            </div>

            <div>
                <p className="checkinfo">{info}</p>
                <p>₹{rate}</p>
                <p>{star}</p>
                <div>
                    <button>Remove from Basket</button>
                </div>
            </div>
        </div>
    )
    }       

export default CheckProduct
