import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router"


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const [searchText, setSearchText] = useState("")

    // Whenever state variables update, react triggers a reconciliation cycle.
    

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5974385&lng=77.3826845&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
    
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=> {setSearchText(e.target.value)}}/>
                    <button onClick={()=> {
                        // Filter the restaurant cards and update the UI
                        // SearchText
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setFilteredRestaurant(filteredRestaurant)

                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)
                    setListOfRestaurant(filteredList)
                }}>
                    Top Rates Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} 
                to={"/restaurants/"+ restaurant.info.id}>
                    <RestaurantCard resData={restaurant}/>
                </Link> ))}
            </div>
        </div>
    )
}

export default Body