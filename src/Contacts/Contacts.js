import { ContactsBracket } from "./ContactsBracket"
const Contacts = {
    img: "https://avatars.mds.yandex.net/get-altay/3923004/2a00000175405a78d049b148888af1a5d040/XXL",
    mail: "gavristov@inbox.ru",
    phone: "89683905124",
    adress: "Москва, ул.Вучетича 2/3"
}

export const ContactsPage = () => {
    console.log(Contacts)
    return (
        <div>
            <div className="contacts_container">
                <ContactsBracket mail={Contacts.mail} phone={Contacts.phone} adress={Contacts.adress} />



                <div id="map" className="map"></div>
            </div>

        </div>
    )
}