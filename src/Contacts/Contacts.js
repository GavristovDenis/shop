import { ContactsBracket } from "./ContactsBracket"
import { YMaps, Map, Placemark } from "react-yandex-maps"
import { Contacts } from "./MockData"

export const ContactsPage = () => {
    return (
        <div>
            <div className="contacts_container">
                <YMaps preload={true}>
                    <div className="map">
                        <Map defaultState={{ center: [55.80784247, 37.57342700], zoom: 15, }} width={"500px"} height={"500px"} ><Placemark geometry={[55.80784247, 37.57342700]} /></Map>
                    </div>
                </YMaps>
                <ContactsBracket mail={Contacts.mail} phone={Contacts.phone} adress={Contacts.adress} />

            </div>
        </div>
    )
}