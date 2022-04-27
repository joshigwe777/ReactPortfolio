import { Link } from "react-router-dom";
import logo from "../images/logo.png"
function NavBar() {
    return <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
            <a className="navbar-brand"><Link to="/myprojectpage"><img className="logo mr-auto" src={logo} /></Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <a className="nav-link"><Link to="/myprojectpage" className="nav-item nav-link">Home</Link></a>
                    <a className="nav-link"><Link to="/myprojectpage/portfolio" className="nav-item nav-link">Portfolio</Link></a>
                    <a className="nav-link"><Link to="/myprojectpage/aboutMe" className="nav-item nav-link">About Me</Link></a>
                    <a className="nav-link"><Link to="/myprojectpage/contactForm" className="nav-item nav-link">Contact</Link></a>
                </div>
            </div>
        </nav>
    </>
}
export default NavBar;