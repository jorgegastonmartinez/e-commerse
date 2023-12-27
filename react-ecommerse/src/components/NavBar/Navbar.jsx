import "./NavBar.css";
// traigo CartWidget a navBar
import CartWidget from "../CartWidget/CartWidget";

//importo img
import logo from "../../assets/logotipo-san-gines.png"

// importo LINK
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <a href="">
                    <img src={logo} alt="logo san gines" />
                </a>
            </Link>
            <ul className="ul">
                <Link className="li" to="/">
                    <a href="">INICIO</a>
                </Link>
                <Link className="li" to="/menu">
                    <a href="">MENU</a>
                </Link>
                <Link className="li" to="/subscribe">
                    <a href="">SUSCRIBITE</a>
                </Link>
                <Link className="li" to="/contact">
                    <a href="">CONTACTO</a>
                </Link>
                <Link className="li">
                    <a href="">TIENDA</a>
                </Link>
                <Link className="li" to="/login">
                    <a href="">INGRESAR</a>
                </Link>
                <Link className="li" to="register">
                    <a href="">REGISTRARSE</a>
                </Link>
                <Link className="li">
                    <CartWidget />
                </Link>
            </ul>
        </nav>
    )
};

export default NavBar;