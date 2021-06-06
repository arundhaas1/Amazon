import React from 'react'
import './Product.css'

function Product({info,rate,star,pic}) {
    return (
        <div className="products">
          <div className="product">
            <div>
                <p className="info">{info}</p>
                <p className="rate">{rate}</p>
                <p className="star">{star}</p>
            </div>

                <img className="pic" alt="" src={pic} />

            <div className="adding">
                <button className="addto tc">Add to basket</button>
            </div>
          </div>
        </div>
    )
}

export default Product
