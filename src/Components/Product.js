import React,{useContext} from 'react'
import './Product.css'
import { StateContext } from './StateProvider'


function Product({id,info,rate,star,pic}) {

  const[{basket},dispatch]=useContext(StateContext)
  console.log("this is ",basket)

    const addToBasket=()=>{
      dispatch({
        type:"ADD_TO_BASKET",
        item:{
          id:id,
          info:info,
          rate:rate,
          star:star,
          pic:pic
        }
      })
    }

    return (
        <div className="products ">
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
                <button onClick={addToBasket} className="addto pointer grow">Add to basket</button>
            </div>
          </div>
        </div>
    )
}

export default Product
