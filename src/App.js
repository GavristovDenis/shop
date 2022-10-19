import { useEffect } from 'react';
import { Header } from './Info/Header';
import { MainPage } from './Info/MainPage';
import { Route, Routes, } from "react-router-dom";
import { ContactsPage } from './Contacts/Contacts';
function App() {

    return (
        <div className='app'>
            <Header />

            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/info' element={<MainPage />} />
                <Route path='/contacts' element={<ContactsPage />} />
            </Routes>

        </div>
    );
}

export default App;
