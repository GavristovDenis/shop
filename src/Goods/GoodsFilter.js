import { React } from "react";


export const Filter = ({ setLesserNumber, setBiggerNumber, setFilteredData, PreFilteredData, lesserNumber, biggerNumber }) => {
    const FilterData = () => {
        setFilteredData(PreFilteredData.filter(v => parseInt(v.price) >= lesserNumber && parseInt(v.price) <= biggerNumber))
        if (!lesserNumber && !biggerNumber) {
            return setFilteredData(PreFilteredData)
        }
    }
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
