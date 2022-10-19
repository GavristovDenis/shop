import { ContactsBracket } from "./ContactsBracket"
import { YMaps, Map, Placemark } from "react-yandex-maps"
const Contacts = {
    img: "https://avatars.mds.yandex.net/get-altay/3923004/2a00000175405a78d049b148888af1a5d040/XXL",
    mail: "gavristov@inbox.ru",
    phone: "89683905124",
    adress: "Москва, ул.Вучетича 2/3"
}
export const ContactsPage = () => {

    return (
        <div>
            <div className="contacts_container">
                <ContactsBracket mail={Contacts.mail} phone={Contacts.phone} adress={Contacts.adress} />
                <YMaps >
                    <div className="map">

                        <Map defaultState={{ center: [55.80784247, 37.57342700], zoom: 15, }} width={"500px"} height={"500px"} >   <Placemark geometry={[55.80784247, 37.57342700]} /></Map>

                    </div>

                </YMaps>
            </div>

        </div>
    )
}