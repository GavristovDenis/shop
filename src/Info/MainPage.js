import React from "react";
import "../index.scss"
import { InfoBracket } from "./InfoBracket";
import { Info } from "./MockData";

export function MainPage() {

    return (
        {/*TODO Вынести*/}
        <div>
            <div className="main_page">
                <div className="main_page_text">
                    Добро пожаловать на ВсяМебель.ru
                </div>
            </div>
        {/*TODO Вынести*/}
            <div className="info_bracket_container_body">
                <div className="info_bracket_container">
                    {/*TODO Убрать return*/}
                    {Info.map((item, index) => {
                        {/*TODO деструктуризация*/}
                        return (
                            <InfoBracket key={index} img={item.img} text={item.text} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
