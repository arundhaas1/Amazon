import React,{useContext} from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { StateContext } from './StateProvider'
import CheckProduct from './CheckProduct'

function Checkout() {

    const[{basket},dispatch]=useContext(StateContext)

    return (
        <div className="checkout">
            <div className="left">
                <div className="add">
                    <img alt="" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved.jpg" />
                </div>
                <div className="comp">
                {basket.map(item=>{
                    return (<CheckProduct 
                    id={item.id}
                    info={item.info}
                    rate={item.rate}
                    star={item.star}
                    pic={item.pic}
                    />)
                 })
                    
                    }
                </div>
            </div>

            <div>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
