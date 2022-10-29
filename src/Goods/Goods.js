import { GoodsCard } from "./GoodsCard"
import { CardInfo } from "./MockData"


export const Goods = () => {
    return (
        <div className="goods">
            <div className="cards">
                {CardInfo.map((item, index) => {
                    return (
                        <GoodsCard key={index} name={item.name} price={item.price} img={item.img} />
                    )
                })}
            </div>
        </div>
    )
}