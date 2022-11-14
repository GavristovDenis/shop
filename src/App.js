import { Header } from './Info/Header';
import { MainPage } from './Info/MainPage';
import { Route, Routes, } from "react-router-dom";
import { ContactsPage } from './Contacts/Contacts';
import { Goods } from './Goods/Goods';
function App() {

    return (
        <div className='app'>
            <Header />

            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/info' element={<MainPage />} />
                <Route path='/contacts' element={<ContactsPage />} />
                <Route path='/goods' element={<Goods />} />
            </Routes>

        </div>
    );
}

export default App;
