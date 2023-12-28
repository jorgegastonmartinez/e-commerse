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
                <Link className="li" to="/">INICIO</Link>
                <Link className="li" to="/menu">MENU</Link>
                <Link className="li" to="/subscribe">SUSCRIBITE</Link>
                <Link className="li" to="/contact">CONTACTO</Link>
                <Link className="li">TIENDA</Link>
                <Link className="li" to="/login">INGRESAR</Link>
                <Link className="li" to="register">REGISTRARSE</Link>
                <Link className="li" to="/category/almuerzoYCena">ALMUERZO Y CENA</Link>
                <Link className="li" to="/category/desayunoYMerienda">DESAYUNO Y MERIENDA</Link>
                <Link className="li" to="/category/cafeteria">CAFETERÍA</Link>
                <Link className="li" to="/category/churreria">CHURRERÍA</Link>
                <Link className="li">
                    <CartWidget />
                </Link>
            </ul>
        </nav>
    )
};

export default NavBar;