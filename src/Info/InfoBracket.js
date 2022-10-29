import "../index.scss"
export const InfoBracket = ({ text, img }) => {
    return (
        <div className="info_bracket">
            <img className="info_image" src={img} alt="lkpoodfgopk" />
            <div className="text_container"><span className="info_text">{text}</span></div>
        </div>
    )
}