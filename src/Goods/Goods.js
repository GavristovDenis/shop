import { GoodsCard } from "./GoodsCard"
import { CardInfo } from "./MockData"
import { Filter } from "./GoodsFilter"
import { useState } from "react"
import { Modal } from "./Modal"
import { Close } from "./Function"
export const Goods = () => {

    const [PreFilteredData] = useState(CardInfo)
    const [filteredData, setFilteredData] = useState(CardInfo)
    const [lesserNumber, setLesserNumber] = useState(0)
    const [biggerNumber, setBiggerNumber] = useState(0)
    const [cart, setCart] = useState([])



    const [modalOn, setModalOn] = useState(false)
    return (
        <div>
            {modalOn ? <Modal Close={() => setModalOn(false)} cart={cart} /> : undefined}
            <Filter setLesserNumber={setLesserNumber} setBiggerNumber={setBiggerNumber} setFilteredData={setFilteredData} PreFilteredData={PreFilteredData} lesserNumber={lesserNumber} biggerNumber={biggerNumber} />
            <div className="cart_button"><img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612606907_117-p-telezhka-na-zelenom-fone-209.png" alt="Изображение не загрузилось :(" className="cart_image" onClick={() => { setModalOn(true) }}></img><span className="cart_number">{cart.length}</span></div>
            <div className="goods">
                <div className="cards">

                    {filteredData.map(({ name, price, img }, index) =>


                        <GoodsCard key={index} name={name} price={price} img={img} changeCart={setCart} cart={cart} />

                    )}
                </div>
            </div>
        </div>

    )
}
