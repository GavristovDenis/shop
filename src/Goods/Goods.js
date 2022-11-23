import { GoodsCard } from "./GoodsCard"
import { CardInfo } from "./MockData"
import { Filter } from "./GoodsFilter"
import { useState } from "react"
import { Modal } from "./Modal"
export const Goods = () => {

    const [filteredData] = useState(CardInfo)
    const [filteredData2, setFilteredData2] = useState(CardInfo)
    const [lesserNumber, setLesserNumber] = useState(0)
    const [biggerNumber, setBiggerNumber] = useState(0)


    const AddToCart = (name, price) => {
        if (cart.length === 10) {
            return
        } else {
            const addedCart = [
                ...cart,
                {
                    name: name,
                    price: price
                }
            ];
            setCart(addedCart)
        }
    }
    const FilterData = () => {
        setFilteredData2(filteredData.filter(v => parseInt(v.price) >= lesserNumber && parseInt(v.price) <= biggerNumber))
        if (!lesserNumber && !biggerNumber) {
            return setFilteredData2(filteredData)
        }
    }
    const Close = () => {

        setModalOn(false)

    }
    const [cart, setCart] = useState([])
    const [modalOn, setModalOn] = useState(false)
    return (
        <div>
            {modalOn ? <Modal Close={Close} cart={cart} /> : ""}
            <Filter FilterData={FilterData} setLesserNumber={setLesserNumber} setBiggerNumber={setBiggerNumber} />
            <div className="cart_button"><img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612606907_117-p-telezhka-na-zelenom-fone-209.png" alt="123" className="cart_image" onClick={() => { setModalOn(true) }}></img><span className="cart_number">{cart.length}</span></div>
            <div className="goods">
                <div className="cards">
                    {filteredData2.map((item, index) => {
                        return (
                            <GoodsCard key={index} name={item.name} price={item.price} img={item.img} AddToCart={AddToCart} />
                        )
                    })}
                </div>
            </div>
        </div>

    )
}