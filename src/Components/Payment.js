import React,{useContext,useState,useEffect} from 'react'
import './Payment.css'
import CheckProduct from './CheckProduct'
import {StateContext} from './StateProvider'
import {Link}  from 'react-router-dom' 
import {useStripe,useElements,CardElement} from '@stripe/react-stripe-js'
import Subtotal from './Subtotal'


function Payment() {
    const [{user,basket},dispatch]=useContext(StateContext);
    const stripe=useStripe();
    const Elements=useElements();

   
    const[total,setTotal]=useState(0)

    const sums=basket.map(sum=>{
        return Number(sum.rate)
    })

    const reduce = sums.reduce((acc,num)=>{
        return acc+num
    },0)  
    
    useEffect(()=>{
        setTotal(reduce)
    },[basket]);

    


    return(
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
                    <div className="address1">
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
                    <div className="method">
                        <form>
                            <div className="carddetail">
                                <CardElement className="card"/>
                            </div>

                            <h3>Subtotal ({basket.length} items):
                               <strong className="count"> ₹{total}</strong>
                            </h3> 
                            <Link to ="/Thanks">
                              <button className="grow butt">Proceed Payment</button>
                            </Link>
                        </form>
                    </div>  
                </div>
            </div>           
        </div>
    )
}

export default Payment
