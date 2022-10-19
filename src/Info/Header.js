import React from "react";
import "../index.scss"
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <div className="header">
            <Link className="link"><button >Товары</button></Link>
            <Link to="/info" className="link"><button>Информация</button></Link>
            <Link to="/contacts" className="link"><button>Контакты</button></Link>
        </div>
    )
}