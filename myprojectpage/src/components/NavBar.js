import { Link } from "react-router-dom";
import logo from "../images/logo.png"
function NavBar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand"><Link to="/myprojectpage"><img className="logo mr-auto" src={logo} /></Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link"><Link to="/myprojectpage" className="nav-link">Home</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/myprojectpage/portfolio" className="nav-link">Portfolio</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/myprojectpage/aboutMe" className="nav-link">About Me</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/myprojectpage/contactForm" className="nav-link">Contact</Link></a>
                    </li>
                </ul>
            </div>

        </nav>
    </>
}
export default NavBar;