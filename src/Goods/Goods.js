import { GoodsCard } from "./GoodsCard"
import { CardInfo } from "./MockData"
import { Filter } from "./GoodsFilter"
import { useState } from "react"
export const Goods = () => {

    const [filteredData, setFilteredData] = useState(CardInfo)
    const [filteredData2, setFilteredData2] = useState(CardInfo)
    const [lesserNumber, setLesserNumber] = useState(0)
    const [biggerNumber, setBiggerNumber] = useState(0)

    const FilterData = () => {
        setFilteredData2(filteredData.filter(v => parseInt(v.price) >= lesserNumber && parseInt(v.price) <= biggerNumber))
    }

    return (
        <div>
            <Filter FilterData={FilterData} setLesserNumber={setLesserNumber} setBiggerNumber={setBiggerNumber} />
            <div className="goods">
                <div className="cards">
                    {filteredData2.map((item, index) => {
                        return (
                            <GoodsCard key={index} name={item.name} price={item.price} img={item.img} />
                        )
                    })}
                </div>
            </div>
        </div>

    )
}