import React from 'react'
import './Product.css'

function Product({info,rate,star,pic}) {
    return (
        <div className="products grow">
          <div className="product">
            <div className="infos ">
                <p className="info tc">{info}</p>
                <p className="rate ">{rate}</p>
                <p className="star">{star}</p>
            </div>

              <div className="photos">
              <img className="pic" alt="" src={pic} height="250" width="400" />
              </div>

            <div className="adding">
                <button className="addto pointer">Add to basket</button>
            </div>
          </div>
        </div>
    )
}

export default Product
