import React,{useContext,useState, useEffect} from 'react'
import './Subtotal.css'
import {StateContext} from './StateProvider'

function Subtotal() {
    const [{basket},dispatch]=useContext(StateContext)

    useEffect(()=>{
        setTotal(reduce)
    },[basket]);

  
    const[total,setTotal]=useState(0)

    const sums=basket.map(sum=>{
        return Number(sum.rate)
    })

    const reduce = sums.reduce((acc,num)=>{
        return acc+num
    },0)     



    return (
        <div className="subtotal">
            <div className="total">
            <p>Subtotal ({basket.length} items):
                <strong className="count"> ₹{total}</strong>
            </p> 
            </div>

            <p className="gift ">
                <input className="box " type="checkbox" />
                <span className="text">This order contains a gift</span>
            </p>
            
            <div className="proceed">
                <button className="proc grow pointer">
                    <span className="commit">
                    Proceed to Checkout
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Subtotal
