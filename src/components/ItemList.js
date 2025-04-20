import {useDispatch} from "react-redux"
import {addItem} from "../utils/cartSlice"

import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map(item => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-1 text-left flex justify-between">
                    <div className="w-9/12">
                    <div className="py-2 font-semibold">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.finalPrice/100 }</span>    
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 relative">
                        <button className="px-10 py-1  bg-white shadow-lg absolute rounded-lg border-1 font-bold text-green-500 bottom-0 left-1/2 transform -translate-x-1/2" onClick={() => handleAddItem(item)}>ADD</button>
                        <img className="rounded-lg" src={CDN_URL + item.card.info.imageId} />
                    </div>
            </div>))}
        </div>
    )    
}

export default ItemList