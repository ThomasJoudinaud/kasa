import { Link } from "react-router-dom"
import "./header.css"
import logo from "../../assets/logo.jpg"

function Header() {
    return(
        <div className="header">
            <div className="header__nav">
                <img src={logo} alt="kasa logo" className="header__nav__logo"/>
                <nav className="header__nav__bar">
                    <Link to="/" className="header__nav__bar__link" >Acceuil</Link>
                    <Link to="/About" className="header__nav__bar__link" >A Propos</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header