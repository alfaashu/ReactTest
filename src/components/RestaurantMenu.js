import Shimmer from "./Shimmer"
import { useParams } from "react-router"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(0)

    if (resInfo === null) return <Shimmer/> 

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info
    
    const cards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") 

    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* {Categories accordions} */}
            {categories.map((category, index)=> (
                // controlled components
                <RestaurantCategory key = {category?.card?.card.title} 
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}/>
            ))}
        </div>
    )
}

export default RestaurantMenu