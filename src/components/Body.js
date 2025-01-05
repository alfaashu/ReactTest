import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5974385&lng=77.3826845&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfRestaurant.length === 0) {
        return <Shimmer/>
    }

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