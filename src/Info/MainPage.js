import React from "react";
import "../index.scss"
import { InfoBracket } from "./InfoBracket";
import { Info } from "./MockData";

export function MainPage() {

    return (
        <div>
            <div className="main_page">
                <div className="main_page_text">
                    Добро пожаловать на ВсяМебель.ru
                </div>
            </div>
            <div className="info_bracket_container_body">
                <div className="info_bracket_container">
                    {Info.map((item, index) => {
                        return (
                            <InfoBracket key={index} img={item.img} text={item.text} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}