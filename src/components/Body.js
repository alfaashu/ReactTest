import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import { SWIGGY_API_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch(SWIGGY_API_URL)
        const json = await data.json()
        
    
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false) return <h1>Looks like your are offline! Please check the internet connection</h1>

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=> {setSearchText(e.target.value)}}/>
                    <button onClick={()=> {

                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setFilteredRestaurant(filteredRestaurant)

                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)
                    setFilteredRestaurant(filteredList)
                }}>
                    Top Rated Restaurant
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