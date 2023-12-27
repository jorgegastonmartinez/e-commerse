import "./Header.css";
// importo img
import arg from "../../assets/argentinaFlag.jpg";
import eu from "../../assets/estadosUnidosFlag.jpg";
import japon from "../../assets/japonFlag.jpg";
import mex from "../../assets/mexicoFlag.jpg";
import esp from "../../assets/spainFlag.jpg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagramicon.png";
import liknkedin from "../../assets/linkedin-social-media.jpg";

const Header = () => {
  return (
    <div className='Header'>
        <div className="Header-top-left">
            <img src={arg} alt="bandera argentina" />
            <img src={eu} alt="bandera Estado Unidense" />
            <img src={japon} alt="bandera Japonesa" />
            <img src={esp} alt="bandera Española" />
            <img src={mex} alt="bandera mexicana" />
        </div>
        <div className="Header-top-right">
            <a href="" target="_blank" rel="noopener noreferrer">
                <img src="" alt="" />
            </a>
            <a href="https://www.instagram.com/sanginesargentina/" target="_blank">
                <img src={instagram} alt="logo instagram" />
            </a>
            <a href="https://www.facebook.com/SanGinesArgentina?_rdc=1&_rdr" target="_blank">
                <img src={facebook} alt="logo facebook" />
            </a>
            <a className="Linkedin" href="https://www.linkedin.com/company/chocolater%C3%ADa-san-gin%C3%A9s-argentina?trk=similar-pages" target="_blank" rel="noopener noreferrer">
                <img src={liknkedin} alt="" />
            </a>
        </div>       
    </div>
  )
};

export default Header