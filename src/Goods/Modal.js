export const Modal = ({ Close, cart }) => {
    const Message = cart.length === 10 ? "Достигнуто максимальное кол-во товаров в корзине" : " "
    return (
        <div className="modal" onClick={Close}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div className="close" onClick={Close}>&#10006;</div>
                <div className="modal_goods">
                    {cart.map(({ name, price }) =>
                        <div className="cart_content"> {name} {price} рублей</div>
                    )}
                    <div className="error_message">{Message}</div>
                </div>
                <div className="check_out_button"><button>Перейти к оформлению</button></div>

            </div>
        </div>
    )
}

