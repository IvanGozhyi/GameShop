import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage/MainPage";
import Catalog from "../pages/Catalog/Catalog";
import GamePage from "../pages/GamePage/GamePage";
import PurchasePage from "../pages/PurchasesPage/PurchasesPage";
import Page404 from "../pages/Page404/Page404";
import AuthPage from "../pages/AuthPage/AuthPage.jsx";
import SignUpPage from "../pages/SingUpPage/SignUpPage.jsx";
import AddGamePage from "../pages/AddGamePage/AddGamePage.jsx";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<GamePage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<SignUpPage/>} />
            <Route path="*" element={<Page404 />} />
            <Route path="/catalog/add" element={<AddGamePage/>} />
        </Routes>
    );
}

export default AppRoutes;