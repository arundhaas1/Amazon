import React,{useContext} from 'react'
import './CheckProduct.css'
import { StateContext } from './StateProvider'
import FlipMove from 'react-flip-move';

function CheckProduct({id,info,rate,star,pic}) {

    const[{basket},dispatch]=useContext(StateContext)

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (
       <FlipMove>
            <div className="checkProduct">
            <div classNmae="picture">
                <img  className="checkPic"  alt="" src={pic}  height="180" width="300"></img>
            </div>

            <div className="informations">
                <p className="checkinfo">{info}</p>
                <p className="checkrate">₹{rate}</p>
                <p>{star}</p>
                <div>
                    <button className="checkbutton grow" onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>
        </div>
       </FlipMove>
    )
    }       

export default CheckProduct
