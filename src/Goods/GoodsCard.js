import { React, useState } from "react"
export const GoodsCard = ({ price, name, img, changeCart, cart }) => {

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
            changeCart(addedCart)
        }
    }
    return (
        <div className="goods_card">
            <div className="card_content">
                <div><img className="goods_image" src={img} alt="123" /></div>
                <div className="goods_info">
                    <div className="goods_name">{name}</div>
                    <div className="goods_price">{price}</div>
                </div>
                <div className="goods_button_cotainer"><button className="goods_add_button" onClick={() => AddToCart(name, price)}>Добавить в корзину</button></div>
            </div>
        </div>
    )
}