import { Info } from "./MockData"
import { InfoBracket } from "./InfoBracket"
export const History = () => {
    return (
        <div className="info_bracket_container_body">
            <div className="info_bracket_container">
                {Info.map(({ img, text }, index) =>

                    <InfoBracket key={index} img={img} text={text} />

                )}
            </div>
        </div>
    )
}