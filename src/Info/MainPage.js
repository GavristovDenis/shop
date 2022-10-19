import React from "react";
import "../index.scss"
import { InfoBracket } from "./InfoBracket";

const Info =
    [{

        img: "https://img-fotki.yandex.ru/get/5810/27484944.283/0_258a84_28768e7f_XXXL",
        text: "Наша компания занимается производством мебели с 1991 года. С того времени компания зарекомендовала себя как лучшего производителя мебели для домов, офисов и предприятий."
    },
    {

        img: "https://www.pkfoot.com/wp-content/uploads/2016/10/HB_Real_Madrid_1_sRGB.jpg",
        text: "Компания была основана братьями Столовыми в 1991 году. C 1985 они выступали работниками завода мебели под началом СССР, но после развала в 1991 выкупили завод и начали собственное производство."
    },
    {

        img: "http://bekasmebel.ru/wp-content/uploads/2016/11/4aea5b5d_662e_11e2_9885_be9df0fa856d_6c1f34bb_6501_11e4_80c0_001e67a739f0.jpg",
        text: "На момент 2022 года компания каждый день производит около 300 различных видов мебели. Мы активно сотрудничаем с передовыми поставщиками лучшей древесины для нашего производства."
    }]
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