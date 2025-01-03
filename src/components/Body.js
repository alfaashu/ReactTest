import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"


const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)
                    setListOfRestaurant(filteredList)
                }}>
                    Top Rates Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body