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
                  
                    <Product className="p1" 
                        info="Amazon Brand - Symbol,Women's Wrist Watches"
                        rate="4000"
                        star="⭐⭐⭐"
                        pic="https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg"
                        id="1"
                    />                    
                   <Product 
                        info="IFLASH Men's & Women's UV Protected Classic Aviator Sunglasses (Black & Blue)"
                        rate="288"
                        star="⭐"
                        pic="https://m.media-amazon.com/images/I/515gKnUgwpL._AC_UL320_.jpg"
                        id="2"
                   />
                    <Product 
                        info="Heyovin Diamond Crystal Touch Designer High Ball Tumbler Long Drink Glass for Drinking Water, Beer, Soda, Fresh Juice,Cocktail Long Drink Glass 300 ML (2)"
                        rate="499"
                        star="⭐⭐⭐⭐"
                        pic="https://m.media-amazon.com/images/I/71BBc1qwTfL._QL65_AC_UL640_.jpg"           
                        id="3"         
                    />
                </div>

                <div className="row2">
                   <Product 
                    info="(Renewed) Lenovo Thinkpad Laptop X240 Intel Core i5 - 4300u Processor, 8 GB Ram & 128 GB SSD & 500GB HDD, Win10, 12.5 Inches 1.3 KG Ultralight Computer"
                    rate="63090"
                    star="⭐⭐⭐"
                    pic="https://m.media-amazon.com/images/I/41ivUw9C9PS._AC_UY218_.jpg"
                    id="4"
                   />
                    <Product 
                    info="Philips GC181 Heavy Weight 1000-Watt Dry Iron" 
                    rate="48000"
                    star="⭐⭐⭐⭐"
                    pic="https://m.media-amazon.com/images/I/51qNhKjuFPL._AC_UY218_.jpg"
                    id="5"
                    />
                    <Product 
                    info="Meditating Sitting Buddha Idols Showpiece For Home Decor - Set of 4 Matki Candles Tealight Diya Decoration Items (9 x 6.5 x 3 Inches)" 
                    rate="4900"
                    star="⭐⭐⭐⭐⭐"
                    pic="https://m.media-amazon.com/images/I/71BHm4xsS-L._AC_UL320_.jpg"
                    id="6"
                    />
                </div>

                <div className="row3">
                    <Product 
                      info="Art Portfolio Carry Case Bag Backpack, Waterproof 4K Art Tool Carrying Bag Outdoor Sketching Sketchpad Drawing Board Bag, Double Zipper Head"
                      rate="3998"
                      star="⭐⭐⭐⭐"
                      pic="https://m.media-amazon.com/images/I/71oQGQ387tL._AC_UL320_.jpg"
                      id="7"
                    />
                    <Product 
                      info="Champions League Club Logos Coloring Book: Top 50 Ranked Teams in Europe 2016/17: This A4 100 page Book has all the Club Logos from the Top 50 ranked ... for you to color. A must for all Soccer fans."
                      rate="999"
                      star="⭐⭐⭐⭐"
                      pic="https://m.media-amazon.com/images/I/814uZfYOgYL._AC_UL320_.jpg"
                      id="8"
                    />
                    <Product 
                        info="Bourge Women's Micam-z51 Running Shoes"
                        rate="13777"
                        star="⭐⭐⭐"
                        pic="https://m.media-amazon.com/images/I/71Xl7u6FaZL._AC_SX200_SY161_QL70_.jpg"
                        id="9"
                    />
                </div>

                <div className="row4">
                  <Product 
                    info="AmazonBasics 139cm (55 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB55U20PS (Black)"
                    rate="45000"
                    star="⭐⭐⭐⭐"
                    pic="https://m.media-amazon.com/images/I/61QLVYZGyFS._AC_UY218_.jpg"    
                    id="10"
                    />
    
                </div>
            </div>

        </div>
    )
}

export default Home
