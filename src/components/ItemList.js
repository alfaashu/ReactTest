import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

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
                    <div className="w-3/12">
                        <button className="px-2 py-1 mx-8 my-24 bg-white shadow-lg absolute rounded-lg border-1 font-bold text-green-500">ADD</button>
                        <img className="rounded-lg" src={CDN_URL + item.card.info.imageId} />
                    </div>
            </div>))}
        </div>
    )    
}

export default ItemList