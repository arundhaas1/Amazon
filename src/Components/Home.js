import React from 'react'
import "./Home.css"
import Product from "./Product.js"

function Home() {
    return (
        <div className="homeComp">
          <div>
            <img className="banner" alt="banner" src="https://storage.googleapis.com/freesat-production-assets/styles/teaser_hero_image_1440x500_/cloud-storage/news/headliners/amazon-prime-video-banner.jpg?itok=zUbCf_wT" />
          </div>

            <div className="row">                
                <div className="row1">
                    <Product 
                    info="Panasonic 1.5 Ton 5 Star Wi-Fi Twin Cool Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, CS/CU-NU18WKYW White)" 
                    rate="₹48,000"
                    star="⭐⭐⭐⭐"
                    pic="https://m.media-amazon.com/images/I/61vern5TkcL._AC_UY218_.jpg"
                    />
                    <Product 
                        info="Amazon Brand - Symbol,Women's Wrist Watches"
                        rate="₹4,000"
                        star="⭐⭐⭐"
                        pic="https://m.media-amazon.com/images/I/71Q9N30lE9L._AC_UL320_.jpg"
                    />
                    <Product 
                        info="Heyovin Diamond Crystal Touch Designer High Ball Tumbler Long Drink Glass for Drinking Water, Beer, Soda, Fresh Juice,Cocktail Long Drink Glass 300 ML (2)"
                        rate="₹499"
                        star="⭐⭐"
                        pic="https://m.media-amazon.com/images/I/71hWz8VanMS._AC_UL320_.jpg"                    
                    />
                    <Product 
                        info="AmazonBasics 139cm (55 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB55U20PS (Black)"
                        rate="₹45,000"
                        star="⭐⭐⭐⭐"
                        pic="https://m.media-amazon.com/images/I/61QLVYZGyFS._AC_UY218_.jpg"    
                    />

                </div>

                <div className="row2">
                   <Product 
                    info="(Renewed) Lenovo Thinkpad Laptop X240 Intel Core i5 - 4300u Processor, 8 GB Ram & 128 GB SSD & 500GB HDD, Win10, 12.5 Inches 1.3 KG Ultralight Computer"
                    rate="₹63,090"
                    star="⭐⭐⭐"
                    pic="https://m.media-amazon.com/images/I/41ivUw9C9PS._AC_UY218_.jpg"
                   />
                   <Product 
                   info="IFLASH Men's & Women's UV Protected Classic Aviator Sunglasses (Black & Blue)"
                   rate="₹288"
                   star="⭐"
                   pic="https://m.media-amazon.com/images/I/515gKnUgwpL._AC_UL320_.jpg"
                   />
                </div>

                <div className="row3">
                    <Product 
                      info="Godrej 260 L 3 Star Inverter Frost-Free Double Door Refrigerator (RF EON 260C 35 RCIF ST RH, Steel Rush, 6 in 1 Convertible)"
                      rate="₹35,000"
                      star="⭐⭐⭐⭐"
                      pic="https://m.media-amazon.com/images/I/61KnaLNTP-L._AC_UY218_.jpg"
                    />
                    <Product 
                      info="amsung Galaxy M42 5G (Prism Dot Black, 8GB RAM, 128GB Storage)"
                      rate="₹11,000"
                      star="⭐⭐⭐⭐"
                      pic="https://m.media-amazon.com/images/I/71LweCKOpFL._AC_UY218_.jpg"
                    />
                    <Product 
                    info="Bourge Women's Micam-z51 Running Shoes"
                    rate="₹13,777"
                    star="⭐⭐⭐"
                    pic="https://m.media-amazon.com/images/I/71Xl7u6FaZL._AC_SX200_SY161_QL70_.jpg"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
