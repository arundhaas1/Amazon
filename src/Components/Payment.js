import React,{useContext} from 'react'
import './Payment.css'
import CheckProduct from './CheckProduct'
import {StateContext} from './StateProvider'
import {Link}  from 'react-router-dom' 


function Payment() {
    const [{user,basket},dispatch]=useContext(StateContext)
    return (
        <div className="payment">
            <div>
                <Link to='/Checkout' style={{textDecoration:'none',color:'black'}}>
                 <h1 className="checkpage">Checkout ({basket?.length} items)</h1>
                </Link>
            </div>

            <div className="contains">
{/* address */}
                <div className="paymentsection">
                    <div className="tittle">
                        <h2>Delivery Address</h2>
                    </div>
                    <div className="address">
                        <p>{user?.email}</p>
                        <p> 133,Los Angels,</p>
                        <p>United States</p>
                    </div>
                </div>
{/* review */}
                <div className="paymentsection">
                    <div className="title">
                        <h2>
                            Review Items And Delivery
                        </h2>
                    </div>
                    <div className="items">
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
{/* payment */}
                <div className="paymentsection">
                    <div className="title">
                        <h2>Payment Method</h2>
                    </div>
                    <div classname="method">

                    </div>  
                </div>
            </div>           
        </div>
    )
}

export default Payment
