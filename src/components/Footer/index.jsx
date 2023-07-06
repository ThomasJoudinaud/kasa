import "./footer.css"
import logo from "../../assets/dark_logo.png"

function Footer() {
    return(
        <div className="Footer">
            <img src={logo} alt="logo kasa sombre" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer