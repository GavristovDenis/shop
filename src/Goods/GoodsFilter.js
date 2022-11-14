import { React } from "react";


export const Filter = ({ FilterData, setLesserNumber, setBiggerNumber }) => {
    return (
        <div className="filter">
            <div>
                <div className="filter_content">
                    <div >Цена:</div><div> От: <input onChange={e => setLesserNumber(e.target.value)} /> До:<input onChange={e => setBiggerNumber(e.target.value)} /></div>
                    <button className="filter_button" onClick={FilterData}>Фильтр</button>
                </div>
            </div>
        </div>
    )

}
