import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
       <Link to ="/"  style={{textDecoration:'none'}}>
         <div className="styles">
         <div className="footer">
            <div className="row">
                <h1>Get to Know Us</h1>
                <div className="column">
                    <p>About Us</p>
                    <p>Careers</p> 
                    <p>Press Releases</p> 
                    <p>Press Releases</p>
                    <p> Gift a Smile</p>
                </div>
            </div>

            <div className="row">
                 <h1>Connect with Us</h1>
                <div className="column">
                    <p>Facebook</p>
                    <p>Twitter</p> 
                    <p>Instagram</p> 
                    
                </div>
            </div>

            <div className="row">
                <h1>Make Money With Us</h1>
                <div className="column">
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p> 
                    <p>Become an Affilate</p> 
                    <p>Advertise Your product</p>
                    <p>Fulfillment Your Product</p>
                    <p>Amazon Pay on Merchants</p>

                </div>
            </div>

            <div className="row">
              <h1>Let Us Help You</h1> 
                <div className="column">
                    <p>COVID-19 and Amazon</p>
                    <p>Your Acount</p> 
                    <p>Return Centre</p> 
                    <p>Amazon App Download </p>
                    <p>100% Purchase Protection</p>
                    <p>Help</p>

                </div>
            </div>
        </div>

            
            <div className="country">
                <p>Australia</p>
                <p>Brazil</p>
                <p>Canada</p>
                <p>China</p>
                <p>Germany</p>
                <p>Italy</p>
                <p>Japan</p>
                <p>Mexico</p>
                <p>Netherlands</p>
                <p>Poland</p>
                <p>Singapore</p>
                <p>Spain</p>
                <p>Turkey</p>
                <p>India</p>
            </div>
            <div className="images">
            <img alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"></img>
            </div>
         </div>
       </Link>
    )
}

export default Footer
