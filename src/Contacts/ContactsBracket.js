import "../index.scss"



export const ContactsBracket = ({ adress, mail, phone }) => {
    return (


        <div className="contacts_bracket">
            <span>Телефон: {phone}</span>
            <span>Почта: {mail}</span>
            <span>Адрес: {adress}</span>
        </div>


    )
}