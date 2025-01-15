import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"

const Restaurantmenu = () => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5974385&lng=77.3826845&restaurantId=936440&catalog_qa=undefined&submitAction=ENTER")
    
    const json = await data.json()
    console.log(json);
    setResInfo(json.data)
    
    }

    const {name, cusines} = resInfo?.cards[2]?.card?.card?.info

    return (resInfo === null) ? <Shimmer/> : (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Bugers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default Restaurantmenu