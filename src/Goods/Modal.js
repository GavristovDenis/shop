export const Modal = ({ Close, cart }) => {

    return (
        <div className="modal" onClick={Close}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div className="close" onClick={Close}>&#10006;</div>
                <div className="modal_goods">
                    {cart.map((item) => {
                        return (
                            <div className="cart_content"> {item.name} {item.price}</div>
                        )
                    })}
                </div>

                <div className="check_out_button"><button>Перейти к оформлению</button></div>
            </div>
        </div>
    )
}

