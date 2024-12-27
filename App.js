import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"

const elem = <span> Element</span>

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Seatch
 * - RestaurantContainer
 * - RestaurantCard
 *      -Img
 *      -name of Res, Star Rating, Cuisine, Delivery Time
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t4.ftcdn.net/jpg/03/33/90/45/240_F_333904553_MmMbXahUB5Dn8XdCQcsGsIsZ2AOhKdtX.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo" 
                alt="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/972a37599772cdc7df93a0855ad87591"
            />
            <h3>Meghana Foods</h3>
            <h4>Biryani, North indian, Asian, Punjabi</h4>
            <h4>4.4 Stars</h4>
            <h4>38 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header/> 
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)