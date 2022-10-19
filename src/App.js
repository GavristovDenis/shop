import { Header } from './Info/Header';
import { MainPage } from './Info/MainPage';
import { Route, Routes, useNavigate } from "react-router-dom";
import { ContactsPage } from './Contacts/Contacts';
function App() {
    useNavigate("/info")
    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path='/info' element={<MainPage />} />
                <Route path='/contacts' element={<ContactsPage />} />
            </Routes>

        </div>
    );
}

export default App;
