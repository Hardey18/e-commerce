import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg" 
                    alt="Home"
                    className="home__image"
                />

                <div className="home__row">
                    <Product
                        id="7776532534"
                        title="DualSense Wireless Controller" 
                        price="17.99"
                        image="https://images-na.ssl-images-amazon.com/images/I/41SWFjA9nLL.jpg"
                        rating={5}    
                    />
                    <Product 
                        id="91773456"
                        title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, PS5, Switch, Xbox One Controller(Adapter Not Included)" 
                        price="26.92"
                        image="https://images-na.ssl-images-amazon.com/images/I/41QztBTooxL.jpg"
                        rating={4}    
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="92756176"
                        title="Fire HD 10 Tablet (10.1 1080p full HD display, 32 GB) – Plum" 
                        price="65.27"
                        image="https://m.media-amazon.com/images/I/61Bl1zJ6QeL._AC_UY218_.jpg"
                        rating={5}    
                    />
                    <Product 
                        id="29653742"
                        title="Just Four Kicks - A New Take On A Classic Party Game" 
                        price="25.00"
                        image="https://m.media-amazon.com/images/I/71juikvkMnL._AC_UL320_.jpg"
                        rating={4}    
                    />
                    <Product 
                        id="7291464386"
                        title="TableTopics- Match" 
                        price="49.99"
                        image="https://m.media-amazon.com/images/I/81q7izHVEiL._AC_UL320_.jpg"
                        rating={4}    
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="7258442379"
                        title="Matty's Toy Stop Deluxe 4-in-1 Chess, Checkers, Tic Tac Toe & Backgammon Wooden Game Set" 
                        price="19.99"
                        image="https://m.media-amazon.com/images/I/91OKEzb4fPL._AC_UL320_.jpg"
                        rating={4}    
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
