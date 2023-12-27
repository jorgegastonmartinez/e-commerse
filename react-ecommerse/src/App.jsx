// importo la app react
import React from "react";

// importo la hoja de style
import "./App.css";

// Importacion de components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";

// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importo las pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SubscribePage from "./pages/SubscribePage/SubscribePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

class App extends React.Component {
    render() {
        return (
            <Router>
            <div className="App">           
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/subscribe" element={<SubscribePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />    
                    <Route path="/category/:categoryId" element={<CategoryPage />} />       
                </Routes>             
            </div>
            </Router>
        );
    }
}

export default App;