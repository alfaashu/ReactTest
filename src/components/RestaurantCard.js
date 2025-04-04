import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info

    const {deliveryTime} = resData?.info?.sla

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img 
                className="rounded-lg" 
                alt="res-logo" 
                src={CDN_URL+ cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

// Higher order function: it taked input RestaurantCard and gives output RestaurantCard promoted

export const withOpenLabel = (RestaurantCard) => {
    return(props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard