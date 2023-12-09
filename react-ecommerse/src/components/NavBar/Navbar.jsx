import "./NavBar.css";
// traigo CartWidget a navBar
import CartWidget from "../CartWidget/CartWidget";

//importo img
import logo from "../../assets/logotipo-san-gines.png"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <a href="">
                <img src={logo} alt="logo san gines" />
            </a>
            <ul>
                <li>
                    <a href="">INICIO</a>
                </li>
                <li>
                    <a href="">MENU</a>
                </li>
                <li>
                    <a href="">SUSCRIBITE</a>
                </li>
                <li>
                    <a href="">CONTACTO</a>
                </li>
                <li>
                    <a href="">TIENDA</a>
                </li>
                <li
                ><a href="">INGRESAR</a>
                </li>
                <li>
                    <a href="">REGISTRARSE</a>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;